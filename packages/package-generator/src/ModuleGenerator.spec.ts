import {ModuleGenerator} from "./ModuleGenerator";

describe('ModuleGenerator', () => {
    describe('expected files', () => {
        const generator = new ModuleGenerator({
            name: 'name',
            description: 'description'
        });
        const expectedFiles = [
            '.gitignore',
            '.npmignore',
            'LICENSE',
            'package.json',
            'README.md',
            'tsconfig.json',
            'tsconfig.test.json',
        ];

        for (const expectedFile of expectedFiles) {
            it(`should include a ${expectedFile} file`, () => {
                let found = false;
                for (const [filename, _] of generator) {
                    if (filename === expectedFile) {
                        found = true;
                    }
                }

                expect(found).toBe(true);
            });
        }
    });

    describe('package.json', () => {
        it('should use the provided package name', () => {
            const name = 'name';
            const generator = new ModuleGenerator({
                name,
                description: 'description'
            });
            let found = false;
            for (const [filename, contents] of generator) {
                if (filename === 'package.json') {
                    found = true;
                    const packageJson = JSON.parse(contents);
                    expect(typeof packageJson).toBe('object');
                    expect(packageJson.name).toBe(name);
                }
            }

            expect(found).toBe(true);
        });

        it('should use the provided description', () => {
            const description = 'description';
            const generator = new ModuleGenerator({
                name: 'name',
                description
            });
            let found = false;
            for (const [filename, contents] of generator) {
                if (filename === 'package.json') {
                    found = true;
                    const packageJson = JSON.parse(contents);
                    expect(typeof packageJson).toBe('object');
                    expect(packageJson.description).toBe(description);
                }
            }

            expect(found).toBe(true);
        });

        it('should use the provided version', () => {
            const version = '1.1.1-alpha';
            const generator = new ModuleGenerator({
                name: 'name',
                description: 'description',
                version,
            });
            let found = false;
            for (const [filename, contents] of generator) {
                if (filename === 'package.json') {
                    found = true;
                    const packageJson = JSON.parse(contents);
                    expect(typeof packageJson).toBe('object');
                    expect(packageJson.version).toBe(version);
                }
            }

            expect(found).toBe(true);
        });

        it('should use a default version of 0.0.1', () => {
            const generator = new ModuleGenerator({
                name: 'name',
                description: 'description'
            });
            let found = false;
            for (const [filename, contents] of generator) {
                if (filename === 'package.json') {
                    found = true;
                    const packageJson = JSON.parse(contents);
                    expect(typeof packageJson).toBe('object');
                    expect(packageJson.version).toBe('0.0.1');
                }
            }

            expect(found).toBe(true);
        });
    });

    describe('README.md', () => {
        it(
            'should use the provided name and description as a default README',
            () => {
                const name = 'name';
                const description = 'description';
                const generator = new ModuleGenerator({name, description});
                let found = false;
                for (const [filename, contents] of generator) {
                    if (filename === 'README.md') {
                        found = true;
                        expect(contents).toBe(
`# ${name}

${description}`
                        );
                    }
                }

                expect(found).toBe(true);
            }
        );

        it(
            'should just use the name as a title if no description is provided',
            () => {
                const name = 'name';
                const generator = new ModuleGenerator({name});
                let found = false;
                for (const [filename, contents] of generator) {
                    if (filename === 'README.md') {
                        found = true;
                        expect(contents).toBe(`# ${name}`);
                    }
                }

                expect(found).toBe(true);
            }
        );
    });
});
