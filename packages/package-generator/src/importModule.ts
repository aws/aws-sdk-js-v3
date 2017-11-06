import {ModuleGenerator} from "./ModuleGenerator";
import {ok} from 'assert';
import {mkdirSync, mkdtempSync, renameSync, statSync, writeFileSync} from 'fs';
import {tmpdir} from 'os';
import {dirname, join, sep} from 'path';

export function importModule(generator: ModuleGenerator): void {
    // create a temporary directory into which to generate the model
    const generationTargetDir = mkdtempSync(`${tmpdir()}${sep}`);

    // generate all files and write them to the temp directory
    for (const [basename, contents] of generator) {
        const dirs = basename.split(sep);
        for (let i = 0, max = dirs.length - 1; i < max; i++) {
            const subdir = join(generationTargetDir, ...dirs.slice(0, i + 1));
            try {
                ok(statSync(subdir).isDirectory());
            } catch {
                mkdirSync(subdir, 0o755);
            }
        }

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
