// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Engine = {
  GENERATIVE: "generative",
  LONG_FORM: "long-form",
  NEURAL: "neural",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type Engine = (typeof Engine)[keyof typeof Engine];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  ar_AE: "ar-AE",
  arb: "arb",
  ca_ES: "ca-ES",
  cmn_CN: "cmn-CN",
  cs_CZ: "cs-CZ",
  cy_GB: "cy-GB",
  da_DK: "da-DK",
  de_AT: "de-AT",
  de_CH: "de-CH",
  de_DE: "de-DE",
  en_AU: "en-AU",
  en_GB: "en-GB",
  en_GB_WLS: "en-GB-WLS",
  en_IE: "en-IE",
  en_IN: "en-IN",
  en_NZ: "en-NZ",
  en_SG: "en-SG",
  en_US: "en-US",
  en_ZA: "en-ZA",
  es_ES: "es-ES",
  es_MX: "es-MX",
  es_US: "es-US",
  fi_FI: "fi-FI",
  fr_BE: "fr-BE",
  fr_CA: "fr-CA",
  fr_FR: "fr-FR",
  hi_IN: "hi-IN",
  is_IS: "is-IS",
  it_IT: "it-IT",
  ja_JP: "ja-JP",
  ko_KR: "ko-KR",
  nb_NO: "nb-NO",
  nl_BE: "nl-BE",
  nl_NL: "nl-NL",
  pl_PL: "pl-PL",
  pt_BR: "pt-BR",
  pt_PT: "pt-PT",
  ro_RO: "ro-RO",
  ru_RU: "ru-RU",
  sv_SE: "sv-SE",
  tr_TR: "tr-TR",
  yue_CN: "yue-CN",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const Gender = {
  Female: "Female",
  Male: "Male",
} as const;
/**
 * @public
 */
export type Gender = (typeof Gender)[keyof typeof Gender];

/**
 * @public
 * @enum
 */
export const VoiceId = {
  Aditi: "Aditi",
  Adriano: "Adriano",
  Amy: "Amy",
  Andres: "Andres",
  Aria: "Aria",
  Arlet: "Arlet",
  Arthur: "Arthur",
  Astrid: "Astrid",
  Ayanda: "Ayanda",
  Bianca: "Bianca",
  Brian: "Brian",
  Burcu: "Burcu",
  Camila: "Camila",
  Carla: "Carla",
  Carmen: "Carmen",
  Celine: "Celine",
  Chantal: "Chantal",
  Conchita: "Conchita",
  Cristiano: "Cristiano",
  Daniel: "Daniel",
  Danielle: "Danielle",
  Dora: "Dora",
  Elin: "Elin",
  Emma: "Emma",
  Enrique: "Enrique",
  Ewa: "Ewa",
  Filiz: "Filiz",
  Gabrielle: "Gabrielle",
  Geraint: "Geraint",
  Giorgio: "Giorgio",
  Gregory: "Gregory",
  Gwyneth: "Gwyneth",
  Hala: "Hala",
  Hannah: "Hannah",
  Hans: "Hans",
  Hiujin: "Hiujin",
  Ida: "Ida",
  Ines: "Ines",
  Isabelle: "Isabelle",
  Ivy: "Ivy",
  Jacek: "Jacek",
  Jan: "Jan",
  Jasmine: "Jasmine",
  Jihye: "Jihye",
  Jitka: "Jitka",
  Joanna: "Joanna",
  Joey: "Joey",
  Justin: "Justin",
  Kajal: "Kajal",
  Karl: "Karl",
  Kazuha: "Kazuha",
  Kendra: "Kendra",
  Kevin: "Kevin",
  Kimberly: "Kimberly",
  Laura: "Laura",
  Lea: "Lea",
  Liam: "Liam",
  Lisa: "Lisa",
  Liv: "Liv",
  Lotte: "Lotte",
  Lucia: "Lucia",
  Lupe: "Lupe",
  Mads: "Mads",
  Maja: "Maja",
  Marlene: "Marlene",
  Mathieu: "Mathieu",
  Matthew: "Matthew",
  Maxim: "Maxim",
  Mia: "Mia",
  Miguel: "Miguel",
  Mizuki: "Mizuki",
  Naja: "Naja",
  Niamh: "Niamh",
  Nicole: "Nicole",
  Ola: "Ola",
  Olivia: "Olivia",
  Pedro: "Pedro",
  Penelope: "Penelope",
  Raveena: "Raveena",
  Remi: "Remi",
  Ricardo: "Ricardo",
  Ruben: "Ruben",
  Russell: "Russell",
  Ruth: "Ruth",
  Sabrina: "Sabrina",
  Salli: "Salli",
  Seoyeon: "Seoyeon",
  Sergio: "Sergio",
  Sofie: "Sofie",
  Stephen: "Stephen",
  Suvi: "Suvi",
  Takumi: "Takumi",
  Tatyana: "Tatyana",
  Thiago: "Thiago",
  Tomoko: "Tomoko",
  Vicki: "Vicki",
  Vitoria: "Vitoria",
  Zayd: "Zayd",
  Zeina: "Zeina",
  Zhiyu: "Zhiyu",
} as const;
/**
 * @public
 */
export type VoiceId = (typeof VoiceId)[keyof typeof VoiceId];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  JSON: "json",
  MP3: "mp3",
  OGG_OPUS: "ogg_opus",
  OGG_VORBIS: "ogg_vorbis",
  PCM: "pcm",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const SpeechMarkType = {
  SENTENCE: "sentence",
  SSML: "ssml",
  VISEME: "viseme",
  WORD: "word",
} as const;
/**
 * @public
 */
export type SpeechMarkType = (typeof SpeechMarkType)[keyof typeof SpeechMarkType];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  COMPLETED: "completed",
  FAILED: "failed",
  IN_PROGRESS: "inProgress",
  SCHEDULED: "scheduled",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const TextType = {
  SSML: "ssml",
  TEXT: "text",
} as const;
/**
 * @public
 */
export type TextType = (typeof TextType)[keyof typeof TextType];
