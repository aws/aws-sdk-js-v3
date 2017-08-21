import {Provider} from '@aws/types';

export const ENV_REGION = 'AWS_REGION';

export function fromEnv(variableName: string = ENV_REGION): Provider<string> {
    return () => {
        const envRegion = process.env[variableName];
        if (envRegion) {
            return Promise.resolve(envRegion);
        }

        return Promise.reject(
            `No value defined for the ${variableName} environment variable`
        );
    };
}
