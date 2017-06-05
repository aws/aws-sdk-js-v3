import {BitArray} from '@aws/crypto-sjcl-bitArray';

/**
 * Generate several random words, and return them in an array.
 * A word consists of 32 bits (4 bytes)
 *
 * @param nwords The number of words to generate.
 * @param paranoia Override of default paranoia level
 */
export function randomWords(nwords: number, paranoia?: number): BitArray;

/**
 * Add entropy to the pools.
 * @param data The entropic value.  Should be a 32-bit integer, array of 32-bit integers, or string
 * @param {Number} estimatedEntropy The estimated entropy of data, in bits
 * @param {String} source The source of the entropy, eg "mouse"
 */
export function addEntropy(
    data: number|BitArray|string,
    estimatedEntropy: number,
    source: string
): void;

/** Is the generator ready? */
export function isReady(paranoia?: number): number;

/** Get the generator's progress toward readiness, as a fraction */
export function getProgress(paranoia?: number): number;

/** start the built-in entropy collectors */
export function startCollectors(): void;

/** stop the built-in entropy collectors */
export function stopCollectors(): void;

/** add an event listener for progress or seeded-ness. */
export function addEventListener(name: string, callback: () => void): void;

/** remove an event listener for progress or seeded-ness */
export function removeEventListener(name: string, cb: () => void): void;
