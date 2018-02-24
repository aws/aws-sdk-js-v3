import { result } from './bundle.min.mjs';

result.then(console.log.bind(console), console.error.bind(console))
