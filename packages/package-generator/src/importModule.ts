import {ModuleGenerator} from "./ModuleGenerator";
import {randomBytes} from 'crypto';
import {mkdirSync, writeFileSync, renameSync} from 'fs';
import {tmpdir} from 'os';
import {dirname, join} from 'path';

export function importModule(generator: ModuleGenerator): void {
    // create a temporary directory into which to generate the model
    const generationTargetDir = join(
        tmpdir(),
        randomBytes(16).toString('hex')
    );
    mkdirSync(generationTargetDir, 0o755);

    // generate all files and write them to the temp directory
    for (const [basename, contents] of generator) {
        writeFileSync(join(generationTargetDir, basename), contents);
    }

    // Move the temp directory into its desired location inside the repository.
    // The underlying syscall will fail if there is a non-empty directory
    // already present at the target package location; this is intentional.
    renameSync(
        generationTargetDir,
        join(dirname(dirname(__dirname)), generator.name)
    );
}
