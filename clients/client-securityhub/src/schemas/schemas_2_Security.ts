// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _A,
  _AACA,
  _AACADD,
  _AAD,
  _AAd,
  _AAGALS,
  _AAGCS,
  _AAGEC,
  _AAGMS,
  _AAGMSL,
  _AAGRA,
  _AAGRAD,
  _AAGS,
  _AAGSD,
  _AAGVA,
  _AAGVAD,
  _AAGVRS,
  _AAGVS,
  _AAGVSD,
  _AAI,
  _AAl,
  _AAla,
  _AAMB,
  _AAMBD,
  _AAMBEOD,
  _AAMBLD,
  _AAMBLPD,
  _AAMBLSMD,
  _AAMBMWSTD,
  _AAMBUD,
  _AAMBUL,
  _AAN,
  _AAP,
  _AAp,
  _AASA,
  _AASASG,
  _AASASGAZL,
  _AASASGAZLD,
  _AASASGD,
  _AASASGLTLTS,
  _AASASGMIPD,
  _AASASGMIPIDD,
  _AASASGMIPLTD,
  _AASASGMIPLTLTS,
  _AASASGMIPLTOL,
  _AASASGMIPLTOLD,
  _AASGQA,
  _AASGQAAAPD,
  _AASGQAAAPL,
  _AASGQAD,
  _AASGQALACD,
  _AASGQALCD,
  _AASGQAOICCD,
  _AASGQAUPCD,
  _AASLC,
  _AASLCBDMD,
  _AASLCBDMED,
  _AASLCBDML,
  _AASLCD,
  _AASLCIMD,
  _AASLCMO,
  _AAWG,
  _AAWGCD,
  _AAWGCRCD,
  _AAWGCRCECD,
  _AAWGD,
  _ABBP,
  _ABBPABSD,
  _ABBPABSL,
  _ABBPBPD,
  _ABBPD,
  _ABBPLD,
  _ABBPRCAD,
  _ABBPRCAL,
  _ABBPRD,
  _ABBPRL,
  _ABBV,
  _ABBVD,
  _ABBVND,
  _ABRP,
  _ABRPCBD,
  _ABRPCLD,
  _ABRPD,
  _ABRPLD,
  _ABS,
  _AC,
  _Ac,
  _ACA,
  _ACBP,
  _ACBPAD,
  _ACBPAL,
  _ACBPD,
  _ACBPE,
  _ACBPEEVD,
  _ACBPEEVL,
  _ACBPERC,
  _ACBPLCCWLD,
  _ACBPLCD,
  _ACBPLCSLD,
  _ACBPS,
  _ACBPVC,
  _ACC,
  _ACc,
  _Acc,
  _ACFD,
  _ACFDCB,
  _ACFDCBIL,
  _ACFDCBw,
  _ACFDD,
  _ACFDDCB,
  _ACFDL,
  _ACFDO,
  _ACFDOCOC,
  _ACFDOG,
  _ACFDOGF,
  _ACFDOGFSC,
  _ACFDOGIL,
  _ACFDOGw,
  _ACFDOI,
  _ACFDOIL,
  _ACFDOSOC,
  _ACFDOSP,
  _ACFDVC,
  _ACFS,
  _ACFSD,
  _ACFSDID,
  _ACFSOD,
  _ACFSOL,
  _ACIA,
  _ACL,
  _ACMC,
  _ACMCD,
  _ACMCDVO,
  _ACMCDVOw,
  _ACMCEKU,
  _ACMCEKUw,
  _ACMCKU,
  _ACMCKUw,
  _ACMCO,
  _ACMCRR,
  _ACMCRS,
  _ACR,
  _ACRd,
  _ACSP,
  _ACt,
  _Act,
  _Acto,
  _ACTT,
  _ACTTD,
  _ACu,
  _ACUT,
  _ACWA,
  _ACWAD,
  _ACWADD,
  _ACWADL,
  _Ad,
  _ADc,
  _ADct,
  _ADd,
  _Add,
  _Addr,
  _ADDT,
  _ADDTAD,
  _ADDTADL,
  _ADDTBMS,
  _ADDTD,
  _ADDTGSI,
  _ADDTGSIL,
  _ADDTKS,
  _ADDTKSL,
  _ADDTLSI,
  _ADDTLSIL,
  _ADDTP,
  _ADDTPT,
  _ADDTPTO,
  _ADDTR,
  _ADDTRGSI,
  _ADDTRGSIL,
  _ADDTRL,
  _ADDTRS,
  _ADDTSD,
  _ADDTSS,
  _ADED,
  _ADEw,
  _Adj,
  _ADl,
  _ADRFRV,
  _ADRI,
  _ADRID,
  _ADRIRSGD,
  _ADRIVSGD,
  _ADRIVSGL,
  _ADRT,
  _ADRTD,
  _ADRTI,
  _ADt,
  _ADu,
  _AE,
  _AEACSP,
  _AEACSPw,
  _AEAP,
  _AEAPD,
  _AEAPPUD,
  _AEAPRDCID,
  _AEAPRDD,
  _AEBE,
  _AEBED,
  _AEBEEL,
  _AEBEELw,
  _AEBEOS,
  _AEBEOSw,
  _AEBET,
  _AEc,
  _AECCD,
  _AECCECCD,
  _AECCECCLCD,
  _AECCSD,
  _AECCSL,
  _AECD,
  _AECDCPSD,
  _AECDCPSL,
  _AECDL,
  _AECDw,
  _AECDws,
  _AECI,
  _AECID,
  _AECLCLD,
  _AECLCLL,
  _AECLD,
  _AECRVCD,
  _AECVE,
  _AECVEAOADD,
  _AECVEAOD,
  _AECVEAOFAD,
  _AECVEAOL,
  _AECVEAOMAD,
  _AECVECCOD,
  _AECVECCOSD,
  _AECVECLBOD,
  _AECVECLOD,
  _AECVED,
  _AECw,
  _AECws,
  _AECwsk,
  _AED,
  _AEDD,
  _AEDDEO,
  _AEDEARO,
  _AEDECCD,
  _AEDECCZACD,
  _AEDLPO,
  _AEDLPOLC,
  _AEDNTNEO,
  _AEDSSO,
  _AEDVPCO,
  _AEE,
  _AEED,
  _AEEDw,
  _AEEDws,
  _AEEEBD,
  _AEEEBL,
  _AEERCD,
  _AEERCDw,
  _AEERCFCD,
  _AEERCFCPD,
  _AEERCFCSD,
  _AEEw,
  _AEEws,
  _AEFLCLTRV,
  _AEFLVTRCL,
  _AEI,
  _AEID,
  _AEIMD,
  _AEIMO,
  _AEINID,
  _AEINIL,
  _AELB,
  _AELBA,
  _AELBAA,
  _AELBAAL,
  _AELBAL,
  _AELBAw,
  _AELBAws,
  _AELBBSD,
  _AELBBSDw,
  _AELBCD,
  _AELBCS,
  _AELBCZLB,
  _AELBD,
  _AELBDw,
  _AELBHC,
  _AELBI,
  _AELBIw,
  _AELBL,
  _AELBLD,
  _AELBLDw,
  _AELBP,
  _AELBSSG,
  _AELBw,
  _AELCSP,
  _AELCSPw,
  _AELT,
  _AELTD,
  _AELTDBDMSD,
  _AELTDBDMSED,
  _AELTDBDMSL,
  _AELTDCOD,
  _AELTDCRSCRTD,
  _AELTDCRSD,
  _AELTDCSD,
  _AELTDD,
  _AELTDEGSSD,
  _AELTDEGSSL,
  _AELTDEIASD,
  _AELTDEIASL,
  _AELTDEOD,
  _AELTDHOD,
  _AELTDIIPD,
  _AELTDIMOD,
  _AELTDIMOSOD,
  _AELTDIRACD,
  _AELTDIRATMMBD,
  _AELTDIRBEBMD,
  _AELTDIRD,
  _AELTDIRMGBPVCD,
  _AELTDIRMMBD,
  _AELTDIRNICD,
  _AELTDIRTLSGBD,
  _AELTDIRVCCD,
  _AELTDLSD,
  _AELTDLSL,
  _AELTDMD,
  _AELTDMOD,
  _AELTDMODw,
  _AELTDNISD,
  _AELTDNISIAD,
  _AELTDNISIAL,
  _AELTDNISIPD,
  _AELTDNISIPDw,
  _AELTDNISIPL,
  _AELTDNISIPLw,
  _AELTDNISL,
  _AELTDNISPIAD,
  _AELTDNISPIAL,
  _AELTDPD,
  _AELTDPDNOD,
  _AENA,
  _AENAA,
  _AENAAL,
  _AENAD,
  _AENAE,
  _AENAEL,
  _AENI,
  _AENIA,
  _AENID,
  _AENIIVAD,
  _AENIIVAL,
  _AENIPIAD,
  _AENIPIAL,
  _AENISG,
  _AENISGL,
  _AER,
  _AERD,
  _AERISCD,
  _AERLPD,
  _AERT,
  _AERTD,
  _AESCPSD,
  _AESCPSL,
  _AESD,
  _AESDCD,
  _AESDCDCBD,
  _AESDCDw,
  _AESDw,
  _AESG,
  _AESGD,
  _AESGIP,
  _AESGIPL,
  _AESGIR,
  _AESGIRL,
  _AESGIRLw,
  _AESGIRw,
  _AESGPLI,
  _AESGPLIL,
  _AESGUIGP,
  _AESGUIGPL,
  _AESLBD,
  _AESLBL,
  _AESNCAVCD,
  _AESNCD,
  _AESPCD,
  _AESPCL,
  _AESPSD,
  _AESPSL,
  _AESR,
  _AESRD,
  _AESSRD,
  _AESSRL,
  _AESw,
  _AESws,
  _AET,
  _AETD,
  _AETDCDD,
  _AETDCDDOD,
  _AETDCDDOL,
  _AETDCDED,
  _AETDCDEFD,
  _AETDCDEFL,
  _AETDCDEHD,
  _AETDCDEHL,
  _AETDCDEL,
  _AETDCDFCD,
  _AETDCDHCD,
  _AETDCDL,
  _AETDCDLCD,
  _AETDCDLCSOD,
  _AETDCDLCSOL,
  _AETDCDLPCD,
  _AETDCDLPD,
  _AETDCDLPDD,
  _AETDCDLPDL,
  _AETDCDLPTD,
  _AETDCDLPTL,
  _AETDCDMPD,
  _AETDCDMPL,
  _AETDCDPMD,
  _AETDCDPML,
  _AETDCDRCD,
  _AETDCDRRD,
  _AETDCDRRL,
  _AETDCDSCD,
  _AETDCDSCL,
  _AETDCDSD,
  _AETDCDSL,
  _AETDCDUD,
  _AETDCDUL,
  _AETDCDVFD,
  _AETDCDVFL,
  _AETDD,
  _AETDIAD,
  _AETDIAL,
  _AETDPCD,
  _AETDPCDw,
  _AETDPCL,
  _AETDPCPCPD,
  _AETDPCPCPL,
  _AETDVD,
  _AETDVDVCD,
  _AETDVEVCACD,
  _AETDVEVCD,
  _AETDVHD,
  _AETDVL,
  _AETDw,
  _AETG,
  _AETGD,
  _AETVD,
  _AETVDL,
  _AETVHD,
  _AEV,
  _AEVA,
  _AEVAL,
  _AEVC,
  _AEVCD,
  _AEVCOD,
  _AEVCOTOD,
  _AEVCOTOL,
  _AEVCRD,
  _AEVCRL,
  _AEVCVTD,
  _AEVCVTL,
  _AEVD,
  _AEVDw,
  _AEVES,
  _AEVESD,
  _AEVESSTD,
  _AEVESSTL,
  _AEVPC,
  _AEVPCD,
  _AEVPCSD,
  _AEVPCVID,
  _AEVw,
  _Af,
  _AGDD,
  _AGDDD,
  _AGDDDSCTD,
  _AGDDDSD,
  _AGDDDSDLD,
  _AGDDDSFLD,
  _AGDDDSKALD,
  _AGDDDSKD,
  _AGDDDSMPD,
  _AGDDDSMPSEIWFD,
  _AGDDDSMPSEIWFEVD,
  _AGDDDSSLD,
  _AGDDFD,
  _AGDDFL,
  _AGM,
  _AH,
  _AIAC,
  _AIAK,
  _AIAKD,
  _AIAKSC,
  _AIAKSCA,
  _AIAKSCSI,
  _AIAMP,
  _AIAMPL,
  _AIAOC,
  _AIc,
  _AICR,
  _AIct,
  _AIG,
  _AIGD,
  _AIGP,
  _AIGPL,
  _AIIP,
  _AIIPL,
  _AIIPR,
  _AIIPRw,
  _AIl,
  _AIMU,
  _AIP,
  _AIp,
  _AIPB,
  _AIPD,
  _AIPV,
  _AIPVL,
  _AIr,
  _AIRD,
  _AIRP,
  _AIRPL,
  _AIRw,
  _AIs,
  _AIt,
  _AIU,
  _AIUD,
  _AIUP,
  _AIUPL,
  _AKI,
  _AKK,
  _AKKD,
  _AKS,
  _AKSD,
  _AKSE,
  _AKSSED,
  _AKSw,
  _AL,
  _Al,
  _ALc,
  _ALcto,
  _ALd,
  _ALF,
  _ALFC,
  _ALFD,
  _ALFDLC,
  _ALFE,
  _ALFEE,
  _ALFL,
  _ALFLL,
  _ALFTC,
  _ALFVC,
  _ALG,
  _ALID,
  _All,
  _ALLV,
  _ALLVD,
  _ALPD,
  _ALS,
  _AM,
  _AMC,
  _AMc,
  _AMCCICAD,
  _AMCCICASD,
  _AMCCICASID,
  _AMCCICASSD,
  _AMCCICATD,
  _AMCCICAUD,
  _AMCCID,
  _AMCCIEID,
  _AMCCIEIEARD,
  _AMCCIEIEITD,
  _AMCD,
  _AMP,
  _AMPL,
  _AMPw,
  _AMVU,
  _AN,
  _ANc,
  _ANct,
  _ANFF,
  _ANFFD,
  _ANFFP,
  _ANFFPD,
  _ANFFSMD,
  _ANFFSML,
  _ANFRG,
  _ANFRGD,
  _ANp,
  _ANt,
  _AO,
  _AOd,
  _AOs,
  _AOSSD,
  _AOSSDASOD,
  _AOSSDCCD,
  _AOSSDCCZACD,
  _AOSSDD,
  _AOSSDDEOD,
  _AOSSDEAROD,
  _AOSSDLPO,
  _AOSSDLPOD,
  _AOSSDMUOD,
  _AOSSDNTNEOD,
  _AOSSDSSOD,
  _AOSSDVOD,
  _AOu,
  _AP,
  _Ap,
  _APA,
  _APc,
  _API,
  _APIA,
  _APIc,
  _AR,
  _Ar,
  _ARc,
  _Arc,
  _ARCc,
  _ARCCN,
  _ARCCNw,
  _ARCCPG,
  _ARCCPGw,
  _ARCCPS,
  _ARCCPSL,
  _ARCCSCS,
  _ARCCSG,
  _ARCCSGw,
  _ARCD,
  _ARCDMW,
  _ARCDMWw,
  _ARCE,
  _ARCEIS,
  _Arch,
  _ARCHS,
  _ARCIR,
  _ARCIRw,
  _ARCLS,
  _ARCPMV,
  _ARCRI,
  _ARCRS,
  _ARCVSG,
  _ARCVSGw,
  _ARCw,
  _ARDC,
  _ARDCAR,
  _ARDCARw,
  _ARDCD,
  _ARDCM,
  _ARDCMw,
  _ARDCOGM,
  _ARDCOGMw,
  _ARDCS,
  _ARDCSD,
  _ARDCSDCSA,
  _ARDCSDCSAw,
  _ARDDM,
  _ARDDMw,
  _ARDI,
  _ARDIAR,
  _ARDIARw,
  _ARDID,
  _ARDIE,
  _ARDIVSG,
  _ARDIVSGw,
  _ARDOGM,
  _ARDOGMw,
  _ARDPF,
  _ARDPFw,
  _ARDPG,
  _ARDPGw,
  _ARDPMV,
  _ARDS,
  _ARDSD,
  _ARDSG,
  _ARDSGD,
  _ARDSGESG,
  _ARDSGESGw,
  _ARDSGIR,
  _ARDSGIRw,
  _ARDSGS,
  _ARDSGSAZ,
  _ARDSGSw,
  _ARDSGw,
  _ARDSI,
  _ARDSIw,
  _ARES,
  _ARESD,
  _ARHZ,
  _ARHZCD,
  _ARHZD,
  _ARHZOD,
  _ARHZVD,
  _ARHZVL,
  _ARID,
  _ARPCWLE,
  _ARPD,
  _ARPDs,
  _ARQLCD,
  _ARs,
  _Art,
  _ARTIS,
  _ARu,
  _ARw,
  _AS,
  _As,
  _ASA,
  _ASAP,
  _ASAPAB,
  _ASAPABD,
  _ASAPD,
  _ASAPVCD,
  _ASB,
  _ASBBLCD,
  _ASBBLCRAIMUD,
  _ASBBLCRD,
  _ASBBLCRFD,
  _ASBBLCRFPD,
  _ASBBLCRFPOD,
  _ASBBLCRFPOL,
  _ASBBLCRFPOTD,
  _ASBBLCRFPTD,
  _ASBBLCRL,
  _ASBBLCRNVTD,
  _ASBBLCRNVTL,
  _ASBBLCRTD,
  _ASBBLCRTL,
  _ASBBVC,
  _ASBD,
  _ASBLC,
  _ASBNC,
  _ASBNCD,
  _ASBNCDw,
  _ASBNCF,
  _ASBNCSKF,
  _ASBNCSKFR,
  _ASBNCSKFRw,
  _ASBOLC,
  _ASBOLCRD,
  _ASBOLCRDRD,
  _ASBSSEBD,
  _ASBSSEC,
  _ASBSSER,
  _ASBSSERw,
  _ASBWC,
  _ASBWCRR,
  _ASBWCRRC,
  _ASBWCRRR,
  _ASBWCRRw,
  _ASBWCRT,
  _ASC,
  _ASCS,
  _ASD,
  _ASDs,
  _ASF,
  _ASFRA,
  _ASFSM,
  _ASFSMD,
  _ASFSMLCD,
  _ASFSMLCDCWLLGD,
  _ASFSMLCDD,
  _ASFSMLCDL,
  _ASFSMTCD,
  _ASL,
  _ASl,
  _ASLs,
  _ASMNI,
  _ASMNID,
  _ASMNIMSCD,
  _ASMS,
  _ASMSD,
  _ASMSRR,
  _Asn,
  _ASO,
  _ASOD,
  _ASOw,
  _ASP,
  _ASp,
  _ASPC,
  _ASPCD,
  _ASQ,
  _ASQD,
  _ASRP,
  _ASS,
  _ASs,
  _ASSEBD,
  _ASsso,
  _ASssoc,
  _ASssoci,
  _AST,
  _ASTD,
  _ASTS,
  _ASTSL,
  _ASu,
  _ASuto,
  _AT,
  _At,
  _ATcc,
  _ATL,
  _ATMMB,
  _ATt,
  _Att,
  _Attr,
  _ATtt,
  _ATu,
  _AU,
  _Au,
  _AUD,
  _Aut,
  _AUu,
  _AVC,
  _AVI,
  _AVl,
  _AVt,
  _AVU,
  _AWAAD,
  _AWABD,
  _AWCHH,
  _AWCRD,
  _AWCRHD,
  _AWIHL,
  _AWR,
  _AWRACD,
  _AWRACDw,
  _AWRAD,
  _AWRBR,
  _AWRBRD,
  _AWRBRMP,
  _AWRBRMPL,
  _AWRD,
  _AWRDw,
  _AWRG,
  _AWRGD,
  _AWRGDw,
  _AWRGRAD,
  _AWRGRD,
  _AWRGRL,
  _AWRGw,
  _AWRL,
  _AWRPL,
  _AWRPLD,
  _AWRR,
  _AWRRBR,
  _AWRRBRD,
  _AWRRBRMP,
  _AWRRBRMPL,
  _AWRRD,
  _AWRRG,
  _AWRRGD,
  _AWRRGRAD,
  _AWRRGRD,
  _AWRRGRL,
  _AWRRPL,
  _AWRRPLD,
  _AWRWA,
  _AWRWAD,
  _AWRWARL,
  _AWRWARLAD,
  _AWRWARLD,
  _AWRWARLOAD,
  _AWSAI,
  _AWVCD,
  _AWWA,
  _AWWAAD,
  _AWWACCD,
  _AWWACCITPD,
  _AWWAD,
  _AWWADw,
  _AWWAR,
  _AWWARL,
  _AWWAw,
  _AXEC,
  _AXECD,
  _AZ,
  _AZC,
  _AZI,
  _AZv,
  _B,
  _BA,
  _Ba,
  _BAI,
  _Bas,
  _BCO,
  _BDM,
  _BDMl,
  _BDMS,
  _Be,
  _BEBM,
  _BEDN,
  _BGSC,
  _BGSCR,
  _BGSCRa,
  _BI,
  _BIF,
  _BIFR,
  _BIFRa,
  _BIFRFL,
  _Bl,
  _BLC,
  _BLCu,
  _Blo,
  _BM,
  _BMa,
  _BMS,
  _BMT,
  _BN,
  _BNC,
  _BNu,
  _BO,
  _Bo,
  _BP,
  _BPA,
  _BPAl,
  _BPI,
  _BPN,
  _BPP,
  _BPR,
  _BPu,
  _BPV,
  _BRI,
  _BRP,
  _BS,
  _BSD,
  _BSIB,
  _BT,
  _BV,
  _BVA,
  _BVC,
  _BVE,
  _BVN,
  _BWC,
  _C,
  _c,
  _CA,
  _Ca,
  _CAA,
  _CAAL,
  _CAC,
  _CACI,
  _CAD,
  _CAe,
  _CAI,
  _CAl,
  _CAli,
  _Can,
  _CAo,
  _Cap,
  _Capt,
  _CAS,
  _Cat,
  _CAu,
  _CB,
  _CBA,
  _CBa,
  _CBAL,
  _CBAS,
  _CBi,
  _CBl,
  _CBS,
  _CBSi,
  _CC,
  _CCa,
  _CCB,
  _CCC,
  _CCE,
  _CCI,
  _CCIa,
  _CCl,
  _CCO,
  _CCo,
  _CCou,
  _CCp,
  _CCS,
  _CCSa,
  _CCT,
  _CD,
  _CDE,
  _CDI,
  _CDID,
  _CDIDL,
  _CDIR,
  _CDo,
  _CDon,
  _CDonn,
  _CDonne,
  _CDont,
  _CDr,
  _CDre,
  _CDT,
  _CE,
  _Ce,
  _CECA,
  _CEE,
  _Cel,
  _Cell,
  _CEP,
  _CEu,
  _CEus,
  _CFDC,
  _CGC,
  _CGI,
  _CGIa,
  _CHC,
  _CHZI,
  _CHZN,
  _CHZNID,
  _CI,
  _Ci,
  _CIC,
  _CIi,
  _CIid,
  _CIl,
  _CIlu,
  _CIom,
  _CIr,
  _CL,
  _Cl,
  _CLBO,
  _CLC,
  _CLG,
  _CLl,
  _CLO,
  _CLS,
  _CLv,
  _CLVI,
  _CLVSG,
  _CM,
  _CMC,
  _CN,
  _Cn,
  _CNA,
  _CNi,
  _CNl,
  _CNlu,
  _CNo,
  _CNol,
  _CNoo,
  _CNou,
  _CO,
  _Co,
  _COC,
  _Col,
  _Com,
  _Comm,
  _Comp,
  _Con,
  _Cond,
  _Conf,
  _Confi,
  _Config,
  _Configu,
  _Conne,
  _Cont,
  _Conta,
  _COon,
  _COp,
  _Cou,
  _CP,
  _Cp,
  _CPa,
  _CPap,
  _CPG,
  _CPK,
  _CPo,
  _CPon,
  _CPonf,
  _CPr,
  _CPS,
  _CPSL,
  _CPu,
  _CR,
  _CRA,
  _CRBK,
  _CRCC,
  _CRD,
  _CRe,
  _Cre,
  _CRH,
  _CRI,
  _Cri,
  _CRl,
  _CRN,
  _CRo,
  _CRod,
  _CRon,
  _CRP,
  _CRRGA,
  _CRRIMBPS,
  _CRS,
  _CRT,
  _CRu,
  _CSa,
  _CSCS,
  _CSe,
  _CSG,
  _CSGN,
  _CSGNl,
  _CSI,
  _CSIA,
  _CSl,
  _CSla,
  _CSlu,
  _CSN,
  _CSo,
  _CSod,
  _CSode,
  _CSom,
  _CSP,
  _CSPd,
  _CSr,
  _CST,
  _CT,
  _CTa,
  _CTIS,
  _CTl,
  _CTlo,
  _CTLP,
  _CTlu,
  _CTo,
  _CTom,
  _CTomp,
  _CTr,
  _CTre,
  _CTTS,
  _CU,
  _CUC,
  _CV,
  _Cv,
  _CVEI,
  _CVFP,
  _CVl,
  _CVo,
  _Cw,
  _CWEE,
  _CWL,
  _CWLGN,
  _CWLLG,
  _CWLLGA,
  _CWLLGACD,
  _CWLRA,
  _CWM,
  _CWME,
  _CZLB,
  _D,
  _DA,
  _Da,
  _DAD,
  _DAe,
  _DAel,
  _DAI,
  _DAS,
  _DAT,
  _Dat,
  _DBCI,
  _DBIC,
  _DBII,
  _DBN,
  _DBNe,
  _DBVA,
  _DC,
  _DCa,
  _DCat,
  _DCB,
  _DCBe,
  _DCBep,
  _DCD,
  _DCe,
  _DCes,
  _DCI,
  _DCM,
  _DCO,
  _DCOGM,
  _DCOGN,
  _DCPG,
  _DCPGS,
  _DCPS,
  _DCR,
  _DCRI,
  _DCSA,
  _DCSI,
  _DD,
  _DDe,
  _DE,
  _De,
  _Def,
  _Del,
  _DEO,
  _DEo,
  _Des,
  _Dest,
  _Det,
  _Deta,
  _Dete,
  _DFA,
  _DI,
  _Di,
  _DIA,
  _DIa,
  _DIC,
  _DICB,
  _DIe,
  _DII,
  _DIi,
  _DIo,
  _DIP,
  _DIr,
  _Dir,
  _DIS,
  _DIV,
  _DIVe,
  _DL,
  _DLC,
  _DLn,
  _DLTA,
  _DM,
  _DMC,
  _DME,
  _DMEe,
  _DMET,
  _DMI,
  _DMo,
  _DMST,
  _DMT,
  _DMW,
  _DN,
  _DNa,
  _DNi,
  _DNn,
  _DNo,
  _DNSN,
  _DO,
  _Do,
  _DOI,
  _DOr,
  _DOT,
  _Dou,
  _DOW,
  _DP,
  _DPE,
  _DPe,
  _DPes,
  _DPest,
  _DPG,
  _DPGN,
  _DPLI,
  _DR,
  _Dr,
  _DRA,
  _DRe,
  _DRef,
  _DRI,
  _Dri,
  _DRL,
  _DRO,
  _DRS,
  _DRTA,
  _DRTP,
  _DS,
  _DSa,
  _DSCI,
  _DSD,
  _DSG,
  _DSGA,
  _DSGAb,
  _DSGb,
  _DSGD,
  _DSGDb,
  _DSGN,
  _DSGNb,
  _DSI,
  _DSn,
  _DSns,
  _DSO,
  _DT,
  _DTA,
  _DTE,
  _DTS,
  _DU,
  _DV,
  _DVC,
  _DVe,
  _DVI,
  _DVKMSKI,
  _DVN,
  _DVO,
  _e,
  _EA,
  _EAn,
  _EAR,
  _EARO,
  _EAx,
  _EB,
  _Eb,
  _EBA,
  _EC,
  _ECA,
  _ECB,
  _ECC,
  _ECCl,
  _ECL,
  _ECn,
  _ECO,
  _ECr,
  _ECWLE,
  _ED,
  _EDr,
  _EDx,
  _EDxp,
  _EEC,
  _EEMT,
  _EF,
  _Eg,
  _EGSS,
  _EH,
  _EHTTPS,
  _EHx,
  _EI,
  _EIAS,
  _EID,
  _EIl,
  _EIm,
  _EIn,
  _EInc,
  _EInd,
  _EIndp,
  _EIS,
  _EIT,
  _EITn,
  _EIx,
  _EK,
  _EKA,
  _EKU,
  _EL,
  _ELCO,
  _ELn,
  _ELnu,
  _ELSCP,
  _EM,
  _EMn,
  _EMr,
  _EMRA,
  _EN,
  _En,
  _Ena,
  _Enab,
  _End,
  _End_,
  _Endp,
  _Eng,
  _ENn,
  _ENSST,
  _ENSSTS,
  _Ent,
  _Enu,
  _Env,
  _EO,
  _EOb,
  _EODM,
  _EOIGI,
  _EOn,
  _EOnc,
  _EP,
  _Ep,
  _EPA,
  _EPn,
  _ER,
  _Er,
  _ERA,
  _ERNDAAAAR,
  _ERNDAR,
  _ERNONO,
  _ERr,
  _ES,
  _Es,
  _ESA,
  _ESCI,
  _ESG,
  _ESGI,
  _ESGN,
  _ESGOI,
  _ESI,
  _ESp,
  _ET,
  _ETa,
  _ETIS,
  _ETn,
  _ETnc,
  _ETP,
  _ETTCIS,
  _ETx,
  _ETxe,
  _EU,
  _EV,
  _Ev,
  _EVb,
  _EVC,
  _EVCf,
  _EVl,
  _EVn,
  _EVR,
  _Ex,
  _F,
  _FA,
  _Fa,
  _FAi,
  _FAix,
  _FC,
  _FCa,
  _FCai,
  _FCi,
  _Fe,
  _FF,
  _FFFRA,
  _FI,
  _Fi,
  _FIi,
  _Fil,
  _Fin,
  _FIV,
  _FL,
  _Fl,
  _FLL,
  _FN,
  _FNe,
  _FNi,
  _FNil,
  _FOA,
  _FP,
  _FPA,
  _FPCP,
  _FPD,
  _FPF,
  _FPFi,
  _FPI,
  _FPi,
  _FPil,
  _FPile,
  _FPL,
  _FPN,
  _FPS,
  _FPSCAD,
  _FPSCAL,
  _FPSRGRD,
  _FPSRGRDi,
  _FPSRGRL,
  _FPSRGRLi,
  _Fq,
  _FR,
  _Fr,
  _FRi,
  _FS,
  _FSA,
  _FSFRA,
  _FSI,
  _G,
  _GCD,
  _GCP,
  _GCPR,
  _GCPRe,
  _GD,
  _GI,
  _Gi,
  _GIe,
  _GIr,
  _GL,
  _GLBA,
  _GLG,
  _GLr,
  _GN,
  _GPL,
  _Gr,
  _Gro,
  _GRT,
  _GSCD,
  _GSCDR,
  _GSCDRe,
  _GSI,
  _GTV,
  _H,
  _h,
  _Ha,
  _Has,
  _HC,
  _HCCI,
  _HCES,
  _HCGP,
  _HCGPS,
  _HCI,
  _HCT,
  _HE,
  _hE,
  _Hea,
  _HECRE,
  _HEE,
  _HFFRA,
  _HI,
  _HIT,
  _HL,
  _HM,
  _HO,
  _Ho,
  _Hos,
  _HP,
  _HPI,
  _HPo,
  _HPos,
  _HPRHL,
  _HPt,
  _hQ,
  _HR,
  _HRC,
  _HRGA,
  _HS,
  _HSFRA,
  _HT,
  _HTe,
  _HTo,
  _HZ,
  _HZI,
  _I,
  _IA,
  _Ia,
  _IAC,
  _IAMDAE,
  _IAn,
  _IAnf,
  _IAp,
  _IApd,
  _IApv,
  _IAs,
  _IAst,
  _IAT,
  _IAV,
  _IC,
  _ICB,
  _ICBA,
  _ICBAL,
  _ICBAS,
  _ICBS,
  _ICI,
  _ICn,
  _ICnl,
  _ICns,
  _ICO,
  _ICT,
  _ICt,
  _ICW,
  _ID,
  _Id,
  _ID_,
  _IDA,
  _IDAE,
  _IDm,
  _IDS,
  _IDs,
  _IDV,
  _IE,
  _IED,
  _IEDT,
  _IFE,
  _IFEL,
  _IG,
  _IGSE,
  _IH,
  _IIB,
  _IIm,
  _IIn,
  _IIP,
  _IIPA,
  _IISB,
  _IL,
  _ILCO,
  _ILnt,
  _IM,
  _Im,
  _IMDE,
  _IMO,
  _IMp,
  _IMRT,
  _IMSC,
  _IMT,
  _IN,
  _In,
  _Ind,
  _Ing,
  _INm,
  _Ins,
  _Int,
  _Inte,
  _Io,
  _IOC,
  _IOD,
  _IOI,
  _IOT,
  _IP,
  _Ip,
  _IPA,
  _IPAg,
  _IPC,
  _IPCp,
  _IPCT,
  _IPE,
  _IPEn,
  _IPI,
  _IPL,
  _IPN,
  _IPn,
  _IPns,
  _IPp,
  _IPpe,
  _IPpr,
  _IPpv,
  _IPpvr,
  _IPR,
  _IR,
  _IRA,
  _IRa,
  _IRC,
  _IRN,
  _IRp,
  _IRpv,
  _IS,
  _Is,
  _ISB,
  _ISC,
  _ISL,
  _ISn,
  _ISp,
  _Isp,
  _It,
  _ITC,
  _ITd,
  _ITL,
  _ITM,
  _ITm,
  _ITmm,
  _ITn,
  _ITnt,
  _ITP,
  _IUB,
  _IUDE,
  _IV,
  _IVA,
  _IVAp,
  _IVApd,
  _IVE,
  _JP,
  _K,
  _KA,
  _KDKRPS,
  _Ke,
  _KI,
  _KIe,
  _KK,
  _KKA,
  _KKI,
  _KM,
  _KMKA,
  _KMKI,
  _KMSMKID,
  _KN,
  _KPE,
  _KRS,
  _KS,
  _KSe,
  _KT,
  _KU,
  _Ku,
  _L,
  _LA,
  _La,
  _Lab,
  _LAC,
  _Lat,
  _Lay,
  _LB,
  _LBA,
  _LBN,
  _LBNo,
  _LBP,
  _LBS,
  _LC,
  _LCA,
  _LCN,
  _LCo,
  _LCog,
  _LCogg,
  _LCSP,
  _LD,
  _LDDT,
  _LDi,
  _LDSM,
  _LE,
  _Le,
  _LEo,
  _LFA,
  _LFM,
  _LFP,
  _LFT,
  _LFVE,
  _LGA,
  _LGI,
  _Li,
  _LID,
  _LIDT,
  _Lin,
  _Lis,
  _LKEA,
  _LL,
  _LM,
  _LMi,
  _LMT,
  _LN,
  _Lo,
  _LOA,
  _Loc,
  _Lon,
  _LP,
  _LPD,
  _LPi,
  _LPO,
  _LPT,
  _LRi,
  _LRin,
  _LRT,
  _LRTa,
  _LS,
  _LSA,
  _LSAa,
  _LSC,
  _LSCD,
  _LSCDR,
  _LSCDRi,
  _LSDT,
  _LSI,
  _LSi,
  _LSL,
  _LSM,
  _LSo,
  _LSog,
  _LST,
  _LT,
  _LTa,
  _LTD,
  _LTI,
  _LTN,
  _LTS,
  _LTTD,
  _LTTE,
  _LUD,
  _LUR,
  _LUT,
  _LUTPPRDT,
  _LVN,
  _M,
  _MA,
  _Ma,
  _MAa,
  _MAat,
  _MAf,
  _Mal,
  _MAS,
  _Mask,
  _MAu,
  _MAul,
  _Max,
  _MAZ,
  _MC,
  _MCS,
  _ME,
  _Me,
  _Mem,
  _MFM,
  _MGBPVC,
  _MHP,
  _Mi,
  _MIa,
  _MIMSV,
  _MIo,
  _MIP,
  _ML,
  _MMB,
  _MN,
  _MO,
  _Mo,
  _MOa,
  _Mod,
  _MOo,
  _MP,
  _MPa,
  _MPal,
  _MPat,
  _MPIOL,
  _MPo,
  _MPou,
  _MPV,
  _MR,
  _MRA,
  _MRa,
  _MS,
  _MSa,
  _MSD,
  _MSe,
  _MSem,
  _MSRP,
  _MSu,
  _MT,
  _MTa,
  _MTCSA,
  _MTCSAD,
  _MTi,
  _MTN,
  _MU,
  _MUA,
  _MUN,
  _MUO,
  _MUP,
  _MVE,
  _MWST,
  _N,
  _NA,
  _Na,
  _NAAI,
  _NAI,
  _NAo,
  _NAS,
  _NB,
  _NBG,
  _NC,
  _NCA,
  _NCCC,
  _NCe,
  _NCHC,
  _NCI,
  _NCIC,
  _NCLC,
  _NCMC,
  _NCUC,
  _ND,
  _NE,
  _Ne,
  _Neg,
  _NEL,
  _NGI,
  _NGL,
  _NH,
  _NI,
  _NIA,
  _NIC,
  _NII,
  _NILCN,
  _NIN,
  _NIOI,
  _NIS,
  _NISo,
  _NKA,
  _NLBA,
  _NM,
  _NMWST,
  _NO,
  _No,
  _NOBN,
  _NODT,
  _NON,
  _Nor,
  _Norm,
  _Not,
  _NP,
  _NPC,
  _NPCD,
  _NPL,
  _NR,
  _NS,
  _NTa,
  _NTe,
  _NTNEO,
  _NTo,
  _Nu,
  _NV,
  _NVEID,
  _NVT,
  _O,
  _OA,
  _OAI,
  _OAIw,
  _OAN,
  _OAv,
  _OAw,
  _Oc,
  _OD,
  _ODAS,
  _ODBC,
  _ODMPPOLP,
  _ODPABC,
  _OET,
  _OG,
  _OGM,
  _OGN,
  _OGw,
  _OI,
  _OIA,
  _OICC,
  _OIw,
  _OK,
  _OKT,
  _OLC,
  _OLE,
  _ON,
  _ONw,
  _OP,
  _Op,
  _Ope,
  _Opera,
  _OPP,
  _OPR,
  _OPt,
  _OR,
  _Or,
  _ORf,
  _Org,
  _Ori,
  _Orig,
  _ORT,
  _OS,
  _OSP,
  _OST,
  _OSv,
  _Ot,
  _OU,
  _Ou,
  _OV,
  _Ov,
  _Ow,
  _P,
  _PA,
  _Pa,
  _PABC,
  _PAe,
  _PAED,
  _Pag,
  _Page,
  _PAl,
  _PAo,
  _PAr,
  _Par,
  _Para,
  _PAS,
  _Pat,
  _Patc,
  _PAu,
  _PB,
  _PBA,
  _PBI,
  _PBT,
  _PBUC,
  _PBW,
  _PC,
  _PCa,
  _PCl,
  _PCP,
  _PCr,
  _PCWLE,
  _PDa,
  _PDar,
  _PDGN,
  _PDGNh,
  _PDN,
  _PDNO,
  _PDNr,
  _PDr,
  _PDRTI,
  _Pe,
  _PEA,
  _PEAh,
  _Per,
  _Perm,
  _PF,
  _PFr,
  _PG,
  _PGN,
  _PI,
  _Pi,
  _PIA,
  _PIAh,
  _PIAha,
  _PIAr,
  _PIAu,
  _PIE,
  _PIKKI,
  _PIl,
  _PIMB,
  _PIo,
  _PIP,
  _PIr,
  _PIRP,
  _PL,
  _Pl,
  _PLI,
  _PLIr,
  _PLS,
  _PLSh,
  _PM,
  _PMA,
  _PMa,
  _PMi,
  _PMo,
  _PMV,
  _PMW,
  _PN,
  _PNa,
  _PNag,
  _PNar,
  _PNo,
  _PNol,
  _PNr,
  _PNri,
  _PNroj,
  _PO,
  _Po,
  _Pol,
  _PP,
  _PPA,
  _PPa,
  _PPD,
  _PPDL,
  _PPDo,
  _PR,
  _Pr,
  _Pre,
  _PRFT,
  _Pri,
  _Prio,
  _Priv,
  _PRL,
  _PRo,
  _Pro,
  _Proc,
  _Produ,
  _Prot,
  _Proto,
  _PS,
  _PSa,
  _PSK,
  _PSl,
  _PSo,
  _PT,
  _PTa,
  _PTl,
  _PTO,
  _PTr,
  _PTri,
  _PTro,
  _PTroj,
  _PTrom,
  _PTrop,
  _PTrov,
  _PTs,
  _PU,
  _PV,
  _PVa,
  _PVL,
  _PVS,
  _PVSD,
  _PVSL,
  _Q,
  _QLC,
  _QN,
  _R,
  _Ra,
  _RAe,
  _RAeg,
  _RAFCC,
  _Ran,
  _RAo,
  _RAoo,
  _RART,
  _RAu,
  _RB,
  _RC,
  _RCe,
  _RCea,
  _RCep,
  _RCepl,
  _RCeq,
  _RCes,
  _RCIC,
  _RCo,
  _RCU,
  _RD,
  _RDe,
  _RDI,
  _RDT,
  _RDu,
  _RE,
  _Re,
  _Rec,
  _Reco,
  _Recor,
  _Red,
  _REe,
  _REex,
  _Reg,
  _Rel,
  _Rem,
  _REo,
  _Res,
  _Reso,
  _Resu,
  _Ret,
  _RF,
  _RFP,
  _RG,
  _RGA,
  _RGD,
  _RGI,
  _RGN,
  _RGS,
  _RGSCAD,
  _RGSCAL,
  _RGSLD,
  _RGSSRACAD,
  _RGSSRD,
  _RGSSRDu,
  _RGSSRDul,
  _RGSSRHD,
  _RGSSRL,
  _RGSSRLu,
  _RGSSRMA,
  _RGSSRMAD,
  _RGSSRMADL,
  _RGSSRMADP,
  _RGSSRMADPL,
  _RGSSRMAS,
  _RGSSRMASL,
  _RGSSRMASP,
  _RGSSRMASPL,
  _RGSSRMATF,
  _RGSSRMATFL,
  _RGSSROD,
  _RGSSROL,
  _RGV,
  _RGVISD,
  _RGVPSD,
  _RH,
  _RHS,
  _RI,
  _RIA,
  _RIa,
  _RIC,
  _RID,
  _RIe,
  _RIec,
  _RIeg,
  _RIes,
  _RIeso,
  _RIev,
  _RII,
  _RIo,
  _RIP,
  _RIu,
  _RIUE,
  _RK,
  _RKPW,
  _RKW,
  _RL,
  _RLA,
  _RLe,
  _RLu,
  _RMTS,
  _RN,
  _RNe,
  _RNeg,
  _RNep,
  _RNes,
  _RNo,
  _RNu,
  _Ro,
  _ROe,
  _ROeb,
  _Rol,
  _Role,
  _Roles,
  _ROu,
  _Rou,
  _Row,
  _ROWF,
  _RPA,
  _RPB,
  _RPD,
  _RPe,
  _RPet,
  _RPH,
  _RPL,
  _RPT,
  _RRDBCI,
  _RRDBII,
  _RRe,
  _RRel,
  _RRes,
  _RReso,
  _RRF,
  _RRI,
  _RRo,
  _RRot,
  _RRSDBII,
  _RSD,
  _RSDo,
  _RSE,
  _RSe,
  _RSen,
  _RSene,
  _RSep,
  _RSes,
  _RSest,
  _RSG,
  _RSGI,
  _RSL,
  _RSLo,
  _RSM,
  _RSo,
  _RSou,
  _RSR,
  _RSS,
  _RSu,
  _RSul,
  _RT,
  _RTAI,
  _RTC,
  _RTes,
  _RTI,
  _RTIe,
  _RTS,
  _RU,
  _Ru,
  _RUe,
  _Rul,
  _Rule,
  _RVC,
  _RVe,
  _RVI,
  _RVu,
  _RWS,
  _S,
  _SA,
  _Sa,
  _SAe,
  _SAer,
  _Sam,
  _SAN,
  _SAo,
  _SAS,
  _SAt,
  _SAta,
  _SAU,
  _SAu,
  _SAZ,
  _SAZu,
  _SB,
  _SBA,
  _SBN,
  _SBP,
  _SBu,
  _SBVA,
  _SC,
  _Sc,
  _SCA,
  _SCADta,
  _SCAe,
  _SCAt,
  _SCC,
  _SCCP,
  _SCCPe,
  _SCCPL,
  _SCD,
  _SCDe,
  _SCe,
  _SCec,
  _SCecu,
  _SCGN,
  _SCh,
  _Sch,
  _SCI,
  _SCi,
  _SCIe,
  _SCIec,
  _SCO,
  _SCo,
  _SCP,
  _SCPe,
  _SCPec,
  _SCPL,
  _SCPMA,
  _SCPMAD,
  _SCPMADL,
  _Scr,
  _SCS,
  _SCT,
  _SCt,
  _SCta,
  _SCTu,
  _SCu,
  _SCy,
  _SD,
  _SDA,
  _SDC,
  _SDD,
  _SDDL,
  _SDe,
  _SDo,
  _SDp,
  _SDR,
  _SDRL,
  _SDS,
  _SDSI,
  _SE,
  _Se,
  _SEA,
  _Sec,
  _Seco,
  _SEE,
  _SEe,
  _SEIWF,
  _Seq,
  _Ser,
  _SEt,
  _Set,
  _SEto,
  _SEtr,
  _SFDA,
  _SFFRA,
  _SG,
  _SGe,
  _SGI,
  _SGIS,
  _SGS,
  _SGSu,
  _SH,
  _SHP,
  _SI,
  _Si,
  _SIeq,
  _SIer,
  _SIes,
  _Sig,
  _Sign,
  _SIi,
  _SIL,
  _SIn,
  _SIP,
  _SIT,
  _SIta,
  _SItat,
  _SIu,
  _SIub,
  _SIubn,
  _SIV,
  _SIVo,
  _SK,
  _SKF,
  _SKP,
  _SLA,
  _SLCO,
  _SLH,
  _SLi,
  _SLo,
  _SLof,
  _SLt,
  _SLtr,
  _SM,
  _SMA,
  _SMo,
  _SMP,
  _SMPPOLP,
  _SMS,
  _SMs,
  _SMu,
  _SN,
  _SNe,
  _SNt,
  _SNta,
  _SNtr,
  _SO,
  _So,
  _SOC,
  _SOe,
  _SOP,
  _Sou,
  _SOV,
  _SP,
  _SPA,
  _SPIAC,
  _SPL,
  _SPo,
  _SPof,
  _SPou,
  _SPour,
  _SPt,
  _SR,
  _SRACA,
  _SRE,
  _SRe,
  _SRev,
  _SRGR,
  _SRGRt,
  _SRL,
  _SRO,
  _SRo,
  _SRt,
  _SRta,
  _SRtat,
  _SRtate,
  _SRtatu,
  _SS,
  _SSc,
  _SSE,
  _SSe,
  _SSEA,
  _SSEC,
  _SSEKMSKI,
  _SSFRA,
  _SSG,
  _SSI,
  _SSIMB,
  _SSL,
  _SSM,
  _SSN,
  _SSO,
  _SSPU,
  _SSR,
  _SSS,
  _SSSPA,
  _SSt,
  _SSu,
  _ST,
  _St,
  _STA,
  _Sta,
  _STAo,
  _Star,
  _Stat,
  _STe,
  _STH,
  _STN,
  _STn,
  _STo,
  _STp,
  _Str,
  _STs,
  _STt,
  _STta,
  _STto,
  _SU,
  _Su,
  _Sub,
  _Subs,
  _SV,
  _SVc,
  _SVO,
  _SVo,
  _SVT,
  _Sw,
  _SWM,
  _T,
  _TA,
  _Ta,
  _TAa,
  _TAe,
  _Tag,
  _Tags,
  _Tar,
  _TBL,
  _TBV,
  _TC,
  _TCA,
  _TCo,
  _TCr,
  _TD,
  _TDA,
  _TDa,
  _TE,
  _Te,
  _TEA,
  _TEP,
  _TEr,
  _Tex,
  _TFc,
  _TGA,
  _TGCB,
  _TGI,
  _Th,
  _Thr,
  _Thre,
  _Threa,
  _TI,
  _Ti,
  _TIC,
  _Tie,
  _TII,
  _TIIh,
  _TIIL,
  _TIM,
  _Tim,
  _Time,
  _TL,
  _Tl,
  _TLSGB,
  _TLSSP,
  _TM,
  _Tm,
  _TMD,
  _TMI,
  _TN,
  _TNo,
  _TO,
  _To,
  _TOD,
  _TP,
  _TPC,
  _TPo,
  _Tr,
  _TRA,
  _TRL,
  _TS,
  _TSB,
  _TTa,
  _Ty,
  _TZ,
  _U,
  _UA,
  _UAOK,
  _UAp,
  _UAs,
  _UB,
  _UBp,
  _UCCHS,
  _UCP,
  _UCPR,
  _UCPRp,
  _UD,
  _UDF,
  _UDp,
  _UI,
  _Ui,
  _UIGP,
  _UIn,
  _Ul,
  _UN,
  _Un,
  _Una,
  _UPC,
  _UPI,
  _UPL,
  _UR,
  _Ur,
  _URN,
  _US,
  _Us,
  _USC,
  _USCn,
  _USCnp,
  _USCp,
  _USCR,
  _USCRp,
  _Use,
  _USM,
  _USS,
  _UT,
  _V,
  _Va,
  _Val,
  _Valu,
  _VC,
  _VCA,
  _VCC,
  _VCI,
  _VCi,
  _VCp,
  _VCpc,
  _VCV,
  _VCVL,
  _VD,
  _VE,
  _Ve,
  _VES,
  _VF,
  _VFa,
  _VGI,
  _VI,
  _VICBSD,
  _VICBSL,
  _VIICBSD,
  _VIICBSL,
  _VIo,
  _VIp,
  _VIPOD,
  _VL,
  _VLu,
  _VM,
  _VML,
  _VMo,
  _VMol,
  _VN,
  _VO,
  _Vo,
  _VP,
  _Vp,
  _VPCI,
  _VPCId,
  _VPCO,
  _VPP,
  _VPu,
  _VS,
  _VSa,
  _VSe,
  _VSG,
  _VSGI,
  _VSIGB,
  _VSo,
  _VSS,
  _VT,
  _VTa,
  _VTg,
  _VTi,
  _VU,
  _Vu,
  _VUA,
  _Vul,
  _VV,
  _W,
  _WA,
  _WAA,
  _WAI,
  _WC,
  _WCa,
  _WCU,
  _WD,
  _WE,
  _We,
  _WER,
  _WERL,
  _WOA,
  _WSo,
  _WT,
  _WWAA,
  _XE,
  _Y,
  _ZAC,
  _ZAE,
  _ZF,
  _ZN,
  n0,
} from "./schemas_0";
import { RelatedFindingList } from "./schemas_20_Batch";

/* eslint no-var: 0 */

export var Action = struct(
  n0,
  _A,
  0,
  [_AT, _NCA, _AACA, _DRA, _PPA],
  [0, () => NetworkConnectionAction, () => AwsApiCallAction, () => DnsRequestAction, () => PortProbeAction]
);
export var ActionLocalIpDetails = struct(n0, _ALID, 0, [_IAV], [0]);
export var ActionLocalPortDetails = struct(n0, _ALPD, 0, [_P, _PN], [1, 0]);
export var ActionRemoteIpDetails = struct(
  n0,
  _ARID,
  0,
  [_IAV, _O, _Co, _Ci, _GL],
  [0, () => IpOrganizationDetails, () => Country, () => City, () => GeoLocation]
);
export var ActionRemotePortDetails = struct(n0, _ARPD, 0, [_P, _PN], [1, 0]);
export var Actor = struct(n0, _Ac, 0, [_I, _U, _S], [0, () => ActorUser, () => ActorSession]);
export var ActorSession = struct(n0, _AS, 0, [_Ui, _MS, _CT, _Is], [0, 0, 1, 0]);
export var ActorUser = struct(n0, _AU, 0, [_N, _Ui, _T, _CU, _Acc], [0, 0, 0, 0, () => UserAccount]);
export var Adjustment = struct(n0, _Ad, 0, [_Me, _R], [0, 0]);
export var AssociatedStandard = struct(n0, _ASs, 0, [_SI], [0]);
export var AssociationSetDetails = struct(
  n0,
  _ASD,
  0,
  [_ASsso, _GI, _Ma, _RTAI, _RTI, _SIu],
  [() => AssociationStateDetails, 0, 2, 0, 0, 0]
);
export var AssociationStateDetails = struct(n0, _ASDs, 0, [_Sta, _SM], [0, 0]);
export var AvailabilityZone = struct(n0, _AZ, 0, [_ZN, _SIu], [0, 0]);
export var AwsAmazonMqBrokerDetails = struct(
  n0,
  _AAMBD,
  0,
  [_ASu, _AMVU, _BA, _BN, _DM, _EO, _ET, _EV, _HIT, _BI, _LSM, _L, _MWST, _PAu, _SG, _ST, _SIub, _Us],
  [
    0,
    2,
    0,
    0,
    0,
    () => AwsAmazonMqBrokerEncryptionOptionsDetails,
    0,
    0,
    0,
    0,
    () => AwsAmazonMqBrokerLdapServerMetadataDetails,
    () => AwsAmazonMqBrokerLogsDetails,
    () => AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails,
    2,
    64 | 0,
    0,
    64 | 0,
    () => AwsAmazonMqBrokerUsersList,
  ]
);
export var AwsAmazonMqBrokerEncryptionOptionsDetails = struct(n0, _AAMBEOD, 0, [_KKI, _UAOK], [0, 2]);
export var AwsAmazonMqBrokerLdapServerMetadataDetails = struct(
  n0,
  _AAMBLSMD,
  0,
  [_H, _RB, _RNo, _RSM, _RSS, _SAU, _UB, _URN, _USM, _USS],
  [64 | 0, 0, 0, 0, 2, 0, 0, 0, 0, 2]
);
export var AwsAmazonMqBrokerLogsDetails = struct(
  n0,
  _AAMBLD,
  0,
  [_Au, _G, _ALG, _GLG, _Pe],
  [2, 2, 0, 0, () => AwsAmazonMqBrokerLogsPendingDetails]
);
export var AwsAmazonMqBrokerLogsPendingDetails = struct(n0, _AAMBLPD, 0, [_Au, _G], [2, 2]);
export var AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails = struct(n0, _AAMBMWSTD, 0, [_DOW, _TOD, _TZ], [0, 0, 0]);
export var AwsAmazonMqBrokerUsersDetails = struct(n0, _AAMBUD, 0, [_PC, _Use], [0, 0]);
export var AwsApiCallAction = struct(
  n0,
  _AACA,
  0,
  [_Ap, _SN, _CTa, _RID, _DD, _AR, _FS, _LS],
  [0, 0, 0, () => ActionRemoteIpDetails, () => AwsApiCallActionDomainDetails, 128 | 0, 0, 0]
);
export var AwsApiCallActionDomainDetails = struct(n0, _AACADD, 0, [_Do], [0]);
export var AwsApiGatewayAccessLogSettings = struct(n0, _AAGALS, 0, [_F, _DA], [0, 0]);
export var AwsApiGatewayCanarySettings = struct(n0, _AAGCS, 0, [_PT, _DI, _SVO, _USC], [1, 0, 128 | 0, 2]);
export var AwsApiGatewayEndpointConfiguration = struct(n0, _AAGEC, 0, [_Ty], [64 | 0]);
export var AwsApiGatewayMethodSettings = struct(
  n0,
  _AAGMS,
  0,
  [_ME, _LL, _DTE, _TBL, _TRL, _CE, _CTIS, _CDE, _RAFCC, _UCCHS, _HM, _RPe],
  [2, 0, 2, 1, 1, 2, 1, 2, 2, 0, 0, 0]
);
export var AwsApiGatewayRestApiDetails = struct(
  n0,
  _AAGRAD,
  0,
  [_I, _N, _D, _CD, _V, _BMT, _MCS, _AKS, _EC],
  [0, 0, 0, 0, 0, 64 | 0, 1, 0, () => AwsApiGatewayEndpointConfiguration]
);
export var AwsApiGatewayStageDetails = struct(
  n0,
  _AAGSD,
  0,
  [_DI, _CCI, _SNt, _D, _CCE, _CCS, _CCSa, _MSe, _Va, _DV, _ALS, _CSa, _TE, _CD, _LUD, _WAA],
  [
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    () => AwsApiGatewayMethodSettingsList,
    128 | 0,
    0,
    () => AwsApiGatewayAccessLogSettings,
    () => AwsApiGatewayCanarySettings,
    2,
    0,
    0,
    0,
  ]
);
export var AwsApiGatewayV2ApiDetails = struct(
  n0,
  _AAGVAD,
  0,
  [_AE, _AIp, _AKSE, _CD, _D, _V, _N, _PTr, _RSE, _CC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => AwsCorsConfiguration]
);
export var AwsApiGatewayV2RouteSettings = struct(n0, _AAGVRS, 0, [_DME, _LL, _DTE, _TBL, _TRL], [2, 0, 2, 1, 1]);
export var AwsApiGatewayV2StageDetails = struct(
  n0,
  _AAGVSD,
  0,
  [_CCI, _CD, _D, _DRS, _DI, _LUD, _RSo, _SNt, _SV, _ALS, _ADu, _LDSM, _AGM],
  [
    0,
    0,
    0,
    () => AwsApiGatewayV2RouteSettings,
    0,
    0,
    () => AwsApiGatewayV2RouteSettings,
    0,
    128 | 0,
    () => AwsApiGatewayAccessLogSettings,
    2,
    0,
    2,
  ]
);
export var AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails = struct(
  n0,
  _AASGQAAAPD,
  0,
  [_ATu, _LAC, _OICC, _UPC],
  [
    0,
    () => AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails,
    () => AwsAppSyncGraphQlApiOpenIdConnectConfigDetails,
    () => AwsAppSyncGraphQlApiUserPoolConfigDetails,
  ]
);
export var AwsAppSyncGraphQlApiDetails = struct(
  n0,
  _AASGQAD,
  0,
  [_AIp, _I, _OICC, _N, _LAC, _XE, _Ar, _UPC, _ATu, _LC, _AAP, _WWAA],
  [
    0,
    0,
    () => AwsAppSyncGraphQlApiOpenIdConnectConfigDetails,
    0,
    () => AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails,
    2,
    0,
    () => AwsAppSyncGraphQlApiUserPoolConfigDetails,
    0,
    () => AwsAppSyncGraphQlApiLogConfigDetails,
    () => AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList,
    0,
  ]
);
export var AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails = struct(
  n0,
  _AASGQALACD,
  0,
  [_ARTIS, _AUu, _IVE],
  [1, 0, 0]
);
export var AwsAppSyncGraphQlApiLogConfigDetails = struct(n0, _AASGQALCD, 0, [_CWLRA, _EVC, _FLL], [0, 2, 0]);
export var AwsAppSyncGraphQlApiOpenIdConnectConfigDetails = struct(
  n0,
  _AASGQAOICCD,
  0,
  [_ATL, _CI, _ITL, _Is],
  [1, 0, 1, 0]
);
export var AwsAppSyncGraphQlApiUserPoolConfigDetails = struct(
  n0,
  _AASGQAUPCD,
  0,
  [_AICR, _ARw, _DAe, _UPI],
  [0, 0, 0, 0]
);
export var AwsAthenaWorkGroupConfigurationDetails = struct(
  n0,
  _AAWGCD,
  0,
  [_RC],
  [() => AwsAthenaWorkGroupConfigurationResultConfigurationDetails]
);
export var AwsAthenaWorkGroupConfigurationResultConfigurationDetails = struct(
  n0,
  _AAWGCRCD,
  0,
  [_ECn],
  [() => AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails]
);
export var AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails = struct(
  n0,
  _AAWGCRCECD,
  0,
  [_EOn, _KK],
  [0, 0]
);
export var AwsAthenaWorkGroupDetails = struct(
  n0,
  _AAWGD,
  0,
  [_N, _D, _Sta, _Conf],
  [0, 0, 0, () => AwsAthenaWorkGroupConfigurationDetails]
);
export var AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails = struct(n0, _AASASGAZLD, 0, [_Val], [0]);
export var AwsAutoScalingAutoScalingGroupDetails = struct(
  n0,
  _AASASGD,
  0,
  [_LCN, _LBN, _HCT, _HCGP, _CT, _MIP, _AZv, _LT, _CR],
  [
    0,
    64 | 0,
    0,
    1,
    0,
    () => AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails,
    () => AwsAutoScalingAutoScalingGroupAvailabilityZonesList,
    () => AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification,
    2,
  ]
);
export var AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification = struct(
  n0,
  _AASASGLTLTS,
  0,
  [_LTI, _LTN, _V],
  [0, 0, 0]
);
export var AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails = struct(
  n0,
  _AASASGMIPD,
  0,
  [_ID, _LT],
  [
    () => AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails,
    () => AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails,
  ]
);
export var AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails = struct(
  n0,
  _AASASGMIPIDD,
  0,
  [_ODAS, _ODBC, _ODPABC, _SAS, _SIP, _SMP],
  [0, 1, 1, 0, 1, 0]
);
export var AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails = struct(
  n0,
  _AASASGMIPLTD,
  0,
  [_LTS, _Ov],
  [
    () => AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
    () => AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList,
  ]
);
export var AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification = struct(
  n0,
  _AASASGMIPLTLTS,
  0,
  [_LTI, _LTN, _V],
  [0, 0, 0]
);
export var AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails = struct(
  n0,
  _AASASGMIPLTOLD,
  0,
  [_ITn, _WC],
  [0, 0]
);
export var AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails = struct(
  n0,
  _AASLCBDMD,
  0,
  [_DN, _Eb, _ND, _VN],
  [0, () => AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails, 2, 0]
);
export var AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails = struct(
  n0,
  _AASLCBDMED,
  0,
  [_DOT, _En, _Io, _SIn, _VSo, _VT],
  [2, 2, 1, 0, 1, 0]
);
export var AwsAutoScalingLaunchConfigurationDetails = struct(
  n0,
  _AASLCD,
  0,
  [_APIA, _BDM, _CLVI, _CLVSG, _CT, _EOb, _IIP, _IIm, _IM, _ITn, _KI, _KN, _LCN, _PTl, _RIa, _SG, _SP, _UD, _MO],
  [
    2,
    () => AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList,
    0,
    64 | 0,
    0,
    2,
    0,
    0,
    () => AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    () => AwsAutoScalingLaunchConfigurationMetadataOptions,
  ]
);
export var AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails = struct(n0, _AASLCIMD, 0, [_Ena], [2]);
export var AwsAutoScalingLaunchConfigurationMetadataOptions = struct(n0, _AASLCMO, 0, [_HE, _HPRHL, _HT], [0, 1, 0]);
export var AwsBackupBackupPlanAdvancedBackupSettingsDetails = struct(n0, _ABBPABSD, 0, [_BO, _RT], [128 | 0, 0]);
export var AwsBackupBackupPlanBackupPlanDetails = struct(
  n0,
  _ABBPBPD,
  0,
  [_BPN, _ABS, _BPR],
  [0, () => AwsBackupBackupPlanAdvancedBackupSettingsList, () => AwsBackupBackupPlanRuleList]
);
export var AwsBackupBackupPlanDetails = struct(
  n0,
  _ABBPD,
  0,
  [_BP, _BPA, _BPI, _VI],
  [() => AwsBackupBackupPlanBackupPlanDetails, 0, 0, 0]
);
export var AwsBackupBackupPlanLifecycleDetails = struct(n0, _ABBPLD, 0, [_DAD, _MTCSAD], [1, 1]);
export var AwsBackupBackupPlanRuleCopyActionsDetails = struct(
  n0,
  _ABBPRCAD,
  0,
  [_DBVA, _Li],
  [0, () => AwsBackupBackupPlanLifecycleDetails]
);
export var AwsBackupBackupPlanRuleDetails = struct(
  n0,
  _ABBPRD,
  0,
  [_TBV, _SWM, _SE, _RN, _RIu, _ECB, _CWM, _CAo, _Li],
  [0, 1, 0, 0, 0, 2, 1, () => AwsBackupBackupPlanRuleCopyActionsList, () => AwsBackupBackupPlanLifecycleDetails]
);
export var AwsBackupBackupVaultDetails = struct(
  n0,
  _ABBVD,
  0,
  [_BVA, _BVN, _EKA, _Not, _AP],
  [0, 0, 0, () => AwsBackupBackupVaultNotificationsDetails, 0]
);
export var AwsBackupBackupVaultNotificationsDetails = struct(n0, _ABBVND, 0, [_BVE, _STA], [64 | 0, 0]);
export var AwsBackupRecoveryPointCalculatedLifecycleDetails = struct(n0, _ABRPCLD, 0, [_DAel, _MTCSA], [0, 0]);
export var AwsBackupRecoveryPointCreatedByDetails = struct(n0, _ABRPCBD, 0, [_BPA, _BPI, _BPV, _BRI], [0, 0, 0, 0]);
export var AwsBackupRecoveryPointDetails = struct(
  n0,
  _ABRPD,
  0,
  [_BSIB, _BVA, _BVN, _CL, _CDo, _CB, _CDr, _EKA, _IRA, _IE, _LRT, _Li, _RPA, _RAe, _RT, _SBVA, _St, _SM, _SC],
  [
    1,
    0,
    0,
    () => AwsBackupRecoveryPointCalculatedLifecycleDetails,
    0,
    () => AwsBackupRecoveryPointCreatedByDetails,
    0,
    0,
    0,
    2,
    0,
    () => AwsBackupRecoveryPointLifecycleDetails,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var AwsBackupRecoveryPointLifecycleDetails = struct(n0, _ABRPLD, 0, [_DAD, _MTCSAD], [1, 1]);
export var AwsCertificateManagerCertificateDetails = struct(
  n0,
  _ACMCD,
  0,
  [
    _CAA,
    _CA,
    _DNo,
    _DVO,
    _EKU,
    _FR,
    _IA,
    _IUB,
    _IAs,
    _Is,
    _KA,
    _KU,
    _NA,
    _NB,
    _Op,
    _RE,
    _RSen,
    _Ser,
    _SA,
    _St,
    _Su,
    _SAN,
    _T,
  ],
  [
    0,
    0,
    0,
    () => AwsCertificateManagerCertificateDomainValidationOptions,
    () => AwsCertificateManagerCertificateExtendedKeyUsages,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    () => AwsCertificateManagerCertificateKeyUsages,
    0,
    0,
    () => AwsCertificateManagerCertificateOptions,
    0,
    () => AwsCertificateManagerCertificateRenewalSummary,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
  ]
);
export var AwsCertificateManagerCertificateDomainValidationOption = struct(
  n0,
  _ACMCDVO,
  0,
  [_DNo, _RRe, _VD, _VE, _VM, _VSa],
  [0, () => AwsCertificateManagerCertificateResourceRecord, 0, 64 | 0, 0, 0]
);
export var AwsCertificateManagerCertificateExtendedKeyUsage = struct(n0, _ACMCEKU, 0, [_N, _OI], [0, 0]);
export var AwsCertificateManagerCertificateKeyUsage = struct(n0, _ACMCKU, 0, [_N], [0]);
export var AwsCertificateManagerCertificateOptions = struct(n0, _ACMCO, 0, [_CTLP], [0]);
export var AwsCertificateManagerCertificateRenewalSummary = struct(
  n0,
  _ACMCRS,
  0,
  [_DVO, _RSene, _RSR, _UA],
  [() => AwsCertificateManagerCertificateDomainValidationOptions, 0, 0, 0]
);
export var AwsCertificateManagerCertificateResourceRecord = struct(n0, _ACMCRR, 0, [_N, _T, _Val], [0, 0, 0]);
export var AwsCloudFormationStackDetails = struct(
  n0,
  _ACFSD,
  0,
  [_Ca, _CTr, _D, _DR, _DIr, _ETP, _LUT, _NAo, _Ou, _RAo, _SIta, _SNta, _SS, _SSR, _TIM],
  [
    64 | 0,
    0,
    0,
    2,
    () => AwsCloudFormationStackDriftInformationDetails,
    2,
    0,
    64 | 0,
    () => AwsCloudFormationStackOutputsList,
    0,
    0,
    0,
    0,
    0,
    1,
  ]
);
export var AwsCloudFormationStackDriftInformationDetails = struct(n0, _ACFSDID, 0, [_SDS], [0]);
export var AwsCloudFormationStackOutputsDetails = struct(n0, _ACFSOD, 0, [_D, _OK, _OV], [0, 0, 0]);
export var AwsCloudFrontDistributionCacheBehavior = struct(n0, _ACFDCB, 0, [_VPP], [0]);
export var AwsCloudFrontDistributionCacheBehaviors = struct(
  n0,
  _ACFDCBw,
  0,
  [_It],
  [() => AwsCloudFrontDistributionCacheBehaviorsItemList]
);
export var AwsCloudFrontDistributionDefaultCacheBehavior = struct(n0, _ACFDDCB, 0, [_VPP], [0]);
export var AwsCloudFrontDistributionDetails = struct(
  n0,
  _ACFDD,
  0,
  [_CBa, _DCB, _DRO, _DNo, _ETa, _LMT, _Lo, _Or, _OG, _VC, _St, _WAI],
  [
    () => AwsCloudFrontDistributionCacheBehaviors,
    () => AwsCloudFrontDistributionDefaultCacheBehavior,
    0,
    0,
    0,
    0,
    () => AwsCloudFrontDistributionLogging,
    () => AwsCloudFrontDistributionOrigins,
    () => AwsCloudFrontDistributionOriginGroups,
    () => AwsCloudFrontDistributionViewerCertificate,
    0,
    0,
  ]
);
export var AwsCloudFrontDistributionLogging = struct(n0, _ACFDL, 0, [_B, _Ena, _IC, _Pr], [0, 2, 2, 0]);
export var AwsCloudFrontDistributionOriginCustomOriginConfig = struct(
  n0,
  _ACFDOCOC,
  0,
  [_HP, _HPt, _OKT, _OPP, _ORT, _OSP],
  [1, 1, 1, 0, 1, () => AwsCloudFrontDistributionOriginSslProtocols]
);
export var AwsCloudFrontDistributionOriginGroup = struct(
  n0,
  _ACFDOG,
  0,
  [_FC],
  [() => AwsCloudFrontDistributionOriginGroupFailover]
);
export var AwsCloudFrontDistributionOriginGroupFailover = struct(
  n0,
  _ACFDOGF,
  0,
  [_SCt],
  [() => AwsCloudFrontDistributionOriginGroupFailoverStatusCodes]
);
export var AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = struct(n0, _ACFDOGFSC, 0, [_It, _Q], [64 | 1, 1]);
export var AwsCloudFrontDistributionOriginGroups = struct(
  n0,
  _ACFDOGw,
  0,
  [_It],
  [() => AwsCloudFrontDistributionOriginGroupsItemList]
);
export var AwsCloudFrontDistributionOriginItem = struct(
  n0,
  _ACFDOI,
  0,
  [_DNo, _I, _OP, _SOC, _COC],
  [
    0,
    0,
    0,
    () => AwsCloudFrontDistributionOriginS3OriginConfig,
    () => AwsCloudFrontDistributionOriginCustomOriginConfig,
  ]
);
export var AwsCloudFrontDistributionOrigins = struct(
  n0,
  _ACFDO,
  0,
  [_It],
  [() => AwsCloudFrontDistributionOriginItemList]
);
export var AwsCloudFrontDistributionOriginS3OriginConfig = struct(n0, _ACFDOSOC, 0, [_OAI], [0]);
export var AwsCloudFrontDistributionOriginSslProtocols = struct(n0, _ACFDOSP, 0, [_It, _Q], [64 | 0, 1]);
export var AwsCloudFrontDistributionViewerCertificate = struct(
  n0,
  _ACFDVC,
  0,
  [_ACA, _Ce, _CSe, _CFDC, _ICI, _MPV, _SSM],
  [0, 0, 0, 2, 0, 0, 0]
);
export var AwsCloudTrailTrailDetails = struct(
  n0,
  _ACTTD,
  0,
  [_CWLLGA, _CWLRA, _HCES, _HR, _IGSE, _IMRT, _IOT, _KKI, _LFVE, _N, _SBN, _SKP, _STA, _STN, _TA],
  [0, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0]
);
export var AwsCloudWatchAlarmDetails = struct(
  n0,
  _ACWAD,
  0,
  [
    _AEc,
    _AAl,
    _AAla,
    _ACUT,
    _ADl,
    _AN,
    _CO,
    _DTA,
    _Di,
    _ELSCP,
    _EP,
    _ES,
    _IDA,
    _MN,
    _Na,
    _OA,
    _Per,
    _Stat,
    _Th,
    _TMI,
    _TMD,
    _Un,
  ],
  [2, 64 | 0, 0, 0, 0, 0, 0, 1, () => AwsCloudWatchAlarmDimensionsList, 0, 1, 0, 64 | 0, 0, 0, 64 | 0, 1, 0, 1, 0, 0, 0]
);
export var AwsCloudWatchAlarmDimensionsDetails = struct(n0, _ACWADD, 0, [_N, _Val], [0, 0]);
export var AwsCodeBuildProjectArtifactsDetails = struct(
  n0,
  _ACBPAD,
  0,
  [_AIr, _ED, _Loc, _N, _NTa, _OAN, _Pa, _Pat, _T],
  [0, 2, 0, 0, 0, 2, 0, 0, 0]
);
export var AwsCodeBuildProjectDetails = struct(
  n0,
  _ACBPD,
  0,
  [_EK, _Art, _Env, _N, _So, _SR, _LCo, _VCp, _SAe],
  [
    0,
    () => AwsCodeBuildProjectArtifactsList,
    () => AwsCodeBuildProjectEnvironment,
    0,
    () => AwsCodeBuildProjectSource,
    0,
    () => AwsCodeBuildProjectLogsConfigDetails,
    () => AwsCodeBuildProjectVpcConfig,
    () => AwsCodeBuildProjectArtifactsList,
  ]
);
export var AwsCodeBuildProjectEnvironment = struct(
  n0,
  _ACBPE,
  0,
  [_Ce, _EVn, _PM, _IPCT, _RCe, _T],
  [
    0,
    () => AwsCodeBuildProjectEnvironmentEnvironmentVariablesList,
    2,
    0,
    () => AwsCodeBuildProjectEnvironmentRegistryCredential,
    0,
  ]
);
export var AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails = struct(
  n0,
  _ACBPEEVD,
  0,
  [_N, _T, _Val],
  [0, 0, 0]
);
export var AwsCodeBuildProjectEnvironmentRegistryCredential = struct(n0, _ACBPERC, 0, [_Cre, _CP], [0, 0]);
export var AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails = struct(
  n0,
  _ACBPLCCWLD,
  0,
  [_GN, _St, _SNtr],
  [0, 0, 0]
);
export var AwsCodeBuildProjectLogsConfigDetails = struct(
  n0,
  _ACBPLCD,
  0,
  [_CWL, _SLo],
  [() => AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails, () => AwsCodeBuildProjectLogsConfigS3LogsDetails]
);
export var AwsCodeBuildProjectLogsConfigS3LogsDetails = struct(n0, _ACBPLCSLD, 0, [_ED, _Loc, _St], [2, 0, 0]);
export var AwsCodeBuildProjectSource = struct(n0, _ACBPS, 0, [_T, _Loc, _GCD, _IS], [0, 0, 1, 2]);
export var AwsCodeBuildProjectVpcConfig = struct(n0, _ACBPVC, 0, [_VIp, _Sub, _SGI], [0, 64 | 0, 64 | 0]);
export var AwsCorsConfiguration = struct(
  n0,
  _ACC,
  0,
  [_AO, _AC, _EH, _MA, _AM, _AH],
  [64 | 0, 2, 64 | 0, 1, 64 | 0, 64 | 0]
);
export var AwsDmsEndpointDetails = struct(
  n0,
  _ADED,
  0,
  [_CAe, _DNa, _EA, _EI, _ETn, _EN, _EIx, _ECA, _KKI, _P, _SNe, _SMs, _Use],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
);
export var AwsDmsReplicationInstanceDetails = struct(
  n0,
  _ADRID,
  0,
  [_ASl, _AMVU, _AZ, _EV, _KKI, _MAZ, _PMW, _PAu, _RIC, _RII, _RSG, _VSG],
  [
    1,
    2,
    0,
    0,
    0,
    2,
    0,
    2,
    0,
    0,
    () => AwsDmsReplicationInstanceReplicationSubnetGroupDetails,
    () => AwsDmsReplicationInstanceVpcSecurityGroupsList,
  ]
);
export var AwsDmsReplicationInstanceReplicationSubnetGroupDetails = struct(n0, _ADRIRSGD, 0, [_RSGI], [0]);
export var AwsDmsReplicationInstanceVpcSecurityGroupsDetails = struct(n0, _ADRIVSGD, 0, [_VSGI], [0]);
export var AwsDmsReplicationTaskDetails = struct(
  n0,
  _ADRTD,
  0,
  [_CSP, _CST, _CSPd, _MT, _I, _RIe, _RIA, _RTIe, _RTS, _SEA, _TM, _TEA, _TD],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var AwsDynamoDbTableAttributeDefinition = struct(n0, _ADDTAD, 0, [_ANt, _ATt], [0, 0]);
export var AwsDynamoDbTableBillingModeSummary = struct(n0, _ADDTBMS, 0, [_BM, _LUTPPRDT], [0, 0]);
export var AwsDynamoDbTableDetails = struct(
  n0,
  _ADDTD,
  0,
  [_ADt, _BMS, _CDT, _GSI, _GTV, _ICt, _KS, _LSA, _LSL, _LSI, _PTro, _Re, _RSes, _SD, _SSt, _TI, _TN, _TSB, _TS, _DPE],
  [
    () => AwsDynamoDbTableAttributeDefinitionList,
    () => AwsDynamoDbTableBillingModeSummary,
    0,
    () => AwsDynamoDbTableGlobalSecondaryIndexList,
    0,
    1,
    () => AwsDynamoDbTableKeySchemaList,
    0,
    0,
    () => AwsDynamoDbTableLocalSecondaryIndexList,
    () => AwsDynamoDbTableProvisionedThroughput,
    () => AwsDynamoDbTableReplicaList,
    () => AwsDynamoDbTableRestoreSummary,
    () => AwsDynamoDbTableSseDescription,
    () => AwsDynamoDbTableStreamSpecification,
    0,
    0,
    1,
    0,
    2,
  ]
);
export var AwsDynamoDbTableGlobalSecondaryIndex = struct(
  n0,
  _ADDTGSI,
  0,
  [_Ba, _IAn, _IN, _ISB, _ISn, _ICt, _KS, _Pro, _PTro],
  [
    2,
    0,
    0,
    1,
    0,
    1,
    () => AwsDynamoDbTableKeySchemaList,
    () => AwsDynamoDbTableProjection,
    () => AwsDynamoDbTableProvisionedThroughput,
  ]
);
export var AwsDynamoDbTableKeySchema = struct(n0, _ADDTKS, 0, [_ANt, _KT], [0, 0]);
export var AwsDynamoDbTableLocalSecondaryIndex = struct(
  n0,
  _ADDTLSI,
  0,
  [_IAn, _IN, _KS, _Pro],
  [0, 0, () => AwsDynamoDbTableKeySchemaList, () => AwsDynamoDbTableProjection]
);
export var AwsDynamoDbTableProjection = struct(n0, _ADDTP, 0, [_NKA, _PTroj], [64 | 0, 0]);
export var AwsDynamoDbTableProvisionedThroughput = struct(
  n0,
  _ADDTPT,
  0,
  [_LDDT, _LIDT, _NODT, _RCU, _WCU],
  [0, 0, 1, 1, 1]
);
export var AwsDynamoDbTableProvisionedThroughputOverride = struct(n0, _ADDTPTO, 0, [_RCU], [1]);
export var AwsDynamoDbTableReplica = struct(
  n0,
  _ADDTR,
  0,
  [_GSI, _KMKI, _PTO, _RNe, _RSep, _RSD],
  [
    () => AwsDynamoDbTableReplicaGlobalSecondaryIndexList,
    0,
    () => AwsDynamoDbTableProvisionedThroughputOverride,
    0,
    0,
    0,
  ]
);
export var AwsDynamoDbTableReplicaGlobalSecondaryIndex = struct(
  n0,
  _ADDTRGSI,
  0,
  [_IN, _PTO],
  [0, () => AwsDynamoDbTableProvisionedThroughputOverride]
);
export var AwsDynamoDbTableRestoreSummary = struct(n0, _ADDTRS, 0, [_SBA, _STAo, _RDT, _RIP], [0, 0, 0, 2]);
export var AwsDynamoDbTableSseDescription = struct(n0, _ADDTSD, 0, [_IEDT, _St, _STs, _KMKA], [0, 0, 0, 0]);
export var AwsDynamoDbTableStreamSpecification = struct(n0, _ADDTSS, 0, [_SEt, _SVT], [2, 0]);
export var AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails = struct(n0, _AECVEAOADD, 0, [_DIi], [0]);
export var AwsEc2ClientVpnEndpointAuthenticationOptionsDetails = struct(
  n0,
  _AECVEAOD,
  0,
  [_T, _ADc, _MAu, _FA],
  [
    0,
    () => AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails,
    () => AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails,
    () => AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails,
  ]
);
export var AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails = struct(
  n0,
  _AECVEAOFAD,
  0,
  [_SPA, _SSSPA],
  [0, 0]
);
export var AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails = struct(
  n0,
  _AECVEAOMAD,
  0,
  [_CRCC],
  [0]
);
export var AwsEc2ClientVpnEndpointClientConnectOptionsDetails = struct(
  n0,
  _AECVECCOD,
  0,
  [_Ena, _LFA, _St],
  [2, 0, () => AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails]
);
export var AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails = struct(n0, _AECVECCOSD, 0, [_C, _M], [0, 0]);
export var AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails = struct(n0, _AECVECLBOD, 0, [_Ena, _BT], [2, 0]);
export var AwsEc2ClientVpnEndpointConnectionLogOptionsDetails = struct(
  n0,
  _AECVECLOD,
  0,
  [_Ena, _CLG, _CLS],
  [2, 0, 0]
);
export var AwsEc2ClientVpnEndpointDetails = struct(
  n0,
  _AECVED,
  0,
  [_CVEI, _D, _CCB, _DS, _STp, _TP, _VP, _SCA, _AOu, _CLO, _SGIS, _VIp, _SSPU, _CCO, _STH, _CLBO],
  [
    0,
    0,
    0,
    64 | 0,
    2,
    0,
    1,
    0,
    () => AwsEc2ClientVpnEndpointAuthenticationOptionsList,
    () => AwsEc2ClientVpnEndpointConnectionLogOptionsDetails,
    64 | 0,
    0,
    0,
    () => AwsEc2ClientVpnEndpointClientConnectOptionsDetails,
    1,
    () => AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails,
  ]
);
export var AwsEc2EipDetails = struct(
  n0,
  _AEED,
  0,
  [_IIn, _PI, _AIl, _AIs, _Do, _PIP, _NBG, _NII, _NIOI, _PIA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var AwsEc2InstanceDetails = struct(
  n0,
  _AEID,
  0,
  [_T, _IIm, _IVA, _IVAp, _KN, _IIPA, _VIp, _SIu, _LA, _NI, _VTi, _MO, _Mo],
  [
    0,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    () => AwsEc2InstanceNetworkInterfacesList,
    0,
    () => AwsEc2InstanceMetadataOptions,
    () => AwsEc2InstanceMonitoringDetails,
  ]
);
export var AwsEc2InstanceMetadataOptions = struct(n0, _AEIMO, 0, [_HE, _HPI, _HPRHL, _HT, _IMT], [0, 0, 1, 0, 0]);
export var AwsEc2InstanceMonitoringDetails = struct(n0, _AEIMD, 0, [_Sta], [0]);
export var AwsEc2InstanceNetworkInterfacesDetails = struct(n0, _AEINID, 0, [_NII], [0]);
export var AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails = struct(
  n0,
  _AELTDBDMSD,
  0,
  [_DN, _Eb, _ND, _VN],
  [0, () => AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails, 0, 0]
);
export var AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails = struct(
  n0,
  _AELTDBDMSED,
  0,
  [_DOT, _En, _Io, _KKI, _SIn, _Thr, _VSo, _VT],
  [2, 2, 1, 0, 0, 1, 1, 0]
);
export var AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails = struct(
  n0,
  _AELTDCRSCRTD,
  0,
  [_CRI, _CRRGA],
  [0, 0]
);
export var AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails = struct(
  n0,
  _AELTDCRSD,
  0,
  [_CRP, _CRT],
  [0, () => AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails]
);
export var AwsEc2LaunchTemplateDataCpuOptionsDetails = struct(n0, _AELTDCOD, 0, [_CCo, _TPC], [1, 1]);
export var AwsEc2LaunchTemplateDataCreditSpecificationDetails = struct(n0, _AELTDCSD, 0, [_CCp], [0]);
export var AwsEc2LaunchTemplateDataDetails = struct(
  n0,
  _AELTDD,
  0,
  [
    _BDMS,
    _CRS,
    _COp,
    _CSr,
    _DAS,
    _DAT,
    _EOb,
    _EGSS,
    _EIAS,
    _EOnc,
    _HO,
    _IIP,
    _IIm,
    _IISB,
    _IMO,
    _IR,
    _ITn,
    _KI,
    _KN,
    _LSi,
    _MOa,
    _MO,
    _Mo,
    _NIS,
    _Pl,
    _PDNO,
    _RDI,
    _SGIS,
    _SGS,
    _UD,
  ],
  [
    () => AwsEc2LaunchTemplateDataBlockDeviceMappingSetList,
    () => AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails,
    () => AwsEc2LaunchTemplateDataCpuOptionsDetails,
    () => AwsEc2LaunchTemplateDataCreditSpecificationDetails,
    2,
    2,
    2,
    () => AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList,
    () => AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList,
    () => AwsEc2LaunchTemplateDataEnclaveOptionsDetails,
    () => AwsEc2LaunchTemplateDataHibernationOptionsDetails,
    () => AwsEc2LaunchTemplateDataIamInstanceProfileDetails,
    0,
    0,
    () => AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsDetails,
    0,
    0,
    0,
    () => AwsEc2LaunchTemplateDataLicenseSetList,
    () => AwsEc2LaunchTemplateDataMaintenanceOptionsDetails,
    () => AwsEc2LaunchTemplateDataMetadataOptionsDetails,
    () => AwsEc2LaunchTemplateDataMonitoringDetails,
    () => AwsEc2LaunchTemplateDataNetworkInterfaceSetList,
    () => AwsEc2LaunchTemplateDataPlacementDetails,
    () => AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails,
    0,
    64 | 0,
    64 | 0,
    0,
  ]
);
export var AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails = struct(n0, _AELTDEGSSD, 0, [_T], [0]);
export var AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails = struct(
  n0,
  _AELTDEIASD,
  0,
  [_Cou, _T],
  [1, 0]
);
export var AwsEc2LaunchTemplateDataEnclaveOptionsDetails = struct(n0, _AELTDEOD, 0, [_Ena], [2]);
export var AwsEc2LaunchTemplateDataHibernationOptionsDetails = struct(n0, _AELTDHOD, 0, [_Confi], [2]);
export var AwsEc2LaunchTemplateDataIamInstanceProfileDetails = struct(n0, _AELTDIIPD, 0, [_Ar, _N], [0, 0]);
export var AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails = struct(
  n0,
  _AELTDIMOD,
  0,
  [_MTa, _SO],
  [0, () => AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails]
);
export var AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails = struct(
  n0,
  _AELTDIMOSOD,
  0,
  [_BDMl, _IIB, _MP, _SIT, _VU],
  [1, 0, 0, 0, 0]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails = struct(
  n0,
  _AELTDIRACD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails = struct(
  n0,
  _AELTDIRATMMBD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails = struct(
  n0,
  _AELTDIRBEBMD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsDetails = struct(
  n0,
  _AELTDIRD,
  0,
  [
    _ACc,
    _AMc,
    _ANc,
    _ATMMB,
    _ATcc,
    _BMa,
    _BEBM,
    _BPu,
    _CM,
    _EIT,
    _IG,
    _LSo,
    _LST,
    _MGBPVC,
    _MMB,
    _NIC,
    _ODMPPOLP,
    _RHS,
    _SMPPOLP,
    _TLSGB,
    _VCC,
  ],
  [
    () => AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails,
    64 | 0,
    64 | 0,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails,
    64 | 0,
    0,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails,
    0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    64 | 0,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails,
    1,
    2,
    1,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails,
    () => AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails,
  ]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails = struct(
  n0,
  _AELTDIRMGBPVCD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails = struct(
  n0,
  _AELTDIRMMBD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails = struct(
  n0,
  _AELTDIRNICD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails = struct(
  n0,
  _AELTDIRTLSGBD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails = struct(
  n0,
  _AELTDIRVCCD,
  0,
  [_Max, _Mi],
  [1, 1]
);
export var AwsEc2LaunchTemplateDataLicenseSetDetails = struct(n0, _AELTDLSD, 0, [_LCA], [0]);
export var AwsEc2LaunchTemplateDataMaintenanceOptionsDetails = struct(n0, _AELTDMOD, 0, [_ARu], [0]);
export var AwsEc2LaunchTemplateDataMetadataOptionsDetails = struct(
  n0,
  _AELTDMODw,
  0,
  [_HE, _HPI, _HT, _HPRHL, _IMT],
  [0, 0, 0, 1, 0]
);
export var AwsEc2LaunchTemplateDataMonitoringDetails = struct(n0, _AELTDMD, 0, [_Ena], [2]);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails = struct(
  n0,
  _AELTDNISD,
  0,
  [_ACIA, _APIA, _DOT, _D, _DIe, _Gr, _ITnt, _IPC, _IP, _IAC, _IAp, _IPCp, _IPp, _NCI, _NII, _PIA, _PIAr, _SPIAC, _SIu],
  [
    2,
    2,
    2,
    0,
    1,
    64 | 0,
    0,
    1,
    () => AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList,
    1,
    () => AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList,
    1,
    () => AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList,
    1,
    0,
    0,
    () => AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList,
    1,
    0,
  ]
);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails = struct(n0, _AELTDNISIPD, 0, [_IPpv], [0]);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails = struct(n0, _AELTDNISIAD, 0, [_IApv], [0]);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails = struct(n0, _AELTDNISIPDw, 0, [_IPpvr], [0]);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails = struct(
  n0,
  _AELTDNISPIAD,
  0,
  [_Pri, _PIA],
  [2, 0]
);
export var AwsEc2LaunchTemplateDataPlacementDetails = struct(
  n0,
  _AELTDPD,
  0,
  [_Af, _AZ, _GN, _HI, _HRGA, _PNa, _SDp, _Te],
  [0, 0, 0, 0, 0, 1, 0, 0]
);
export var AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails = struct(
  n0,
  _AELTDPDNOD,
  0,
  [_ERNDAAAAR, _ERNDAR, _HTo],
  [2, 2, 0]
);
export var AwsEc2LaunchTemplateDetails = struct(
  n0,
  _AELTD,
  0,
  [_LTN, _I, _LTD, _DVN, _LVN],
  [0, 0, () => AwsEc2LaunchTemplateDataDetails, 1, 1]
);
export var AwsEc2NetworkAclAssociation = struct(n0, _AENAA, 0, [_NAAI, _NAI, _SIu], [0, 0, 0]);
export var AwsEc2NetworkAclDetails = struct(
  n0,
  _AENAD,
  0,
  [_IDs, _NAI, _OIw, _VIp, _As, _Ent],
  [2, 0, 0, 0, () => AwsEc2NetworkAclAssociationList, () => AwsEc2NetworkAclEntryList]
);
export var AwsEc2NetworkAclEntry = struct(
  n0,
  _AENAE,
  0,
  [_CBi, _Eg, _ITC, _ICB, _PR, _Prot, _RAu, _RNu],
  [0, 2, () => IcmpTypeCode, 0, () => PortRangeFromTo, 0, 0, 1]
);
export var AwsEc2NetworkInterfaceAttachment = struct(
  n0,
  _AENIA,
  0,
  [_ATtt, _AIt, _DOT, _DIe, _IIn, _IOI, _St],
  [0, 0, 2, 1, 0, 0, 0]
);
export var AwsEc2NetworkInterfaceDetails = struct(
  n0,
  _AENID,
  0,
  [_At, _NII, _SG, _SDC, _IVAp, _PIAr, _PDN, _PI],
  [
    () => AwsEc2NetworkInterfaceAttachment,
    0,
    () => AwsEc2NetworkInterfaceSecurityGroupList,
    2,
    () => AwsEc2NetworkInterfaceIpV6AddressList,
    () => AwsEc2NetworkInterfacePrivateIpAddressList,
    0,
    0,
  ]
);
export var AwsEc2NetworkInterfaceIpV6AddressDetail = struct(n0, _AENIIVAD, 0, [_IVApd], [0]);
export var AwsEc2NetworkInterfacePrivateIpAddressDetail = struct(n0, _AENIPIAD, 0, [_PIA, _PDNr], [0, 0]);
export var AwsEc2NetworkInterfaceSecurityGroup = struct(n0, _AENISG, 0, [_GN, _GIr], [0, 0]);
export var AwsEc2RouteTableDetails = struct(
  n0,
  _AERTD,
  0,
  [_ASssoc, _OIw, _PVS, _RTI, _RSou, _VIp],
  [() => AssociationSetList, 0, () => PropagatingVgwSetList, 0, () => RouteSetList, 0]
);
export var AwsEc2SecurityGroupDetails = struct(
  n0,
  _AESGD,
  0,
  [_GN, _GIr, _OIw, _VIp, _IPpe, _IPE],
  [0, 0, 0, 0, () => AwsEc2SecurityGroupIpPermissionList, () => AwsEc2SecurityGroupIpPermissionList]
);
export var AwsEc2SecurityGroupIpPermission = struct(
  n0,
  _AESGIP,
  0,
  [_IPpr, _FP, _TPo, _UIGP, _IRp, _IRpv, _PLI],
  [
    0,
    1,
    1,
    () => AwsEc2SecurityGroupUserIdGroupPairList,
    () => AwsEc2SecurityGroupIpRangeList,
    () => AwsEc2SecurityGroupIpv6RangeList,
    () => AwsEc2SecurityGroupPrefixListIdList,
  ]
);
export var AwsEc2SecurityGroupIpRange = struct(n0, _AESGIR, 0, [_CIi], [0]);
export var AwsEc2SecurityGroupIpv6Range = struct(n0, _AESGIRw, 0, [_CIid], [0]);
export var AwsEc2SecurityGroupPrefixListId = struct(n0, _AESGPLI, 0, [_PLIr], [0]);
export var AwsEc2SecurityGroupUserIdGroupPair = struct(
  n0,
  _AESGUIGP,
  0,
  [_GIr, _GN, _PS, _UI, _VIp, _VPCI],
  [0, 0, 0, 0, 0, 0]
);
export var AwsEc2SubnetDetails = struct(
  n0,
  _AESD,
  0,
  [_AIAOC, _AZ, _AZI, _AIAC, _CBi, _DFA, _MPIOL, _OIw, _Sta, _SAu, _SIu, _VIp, _ICBAS],
  [2, 0, 0, 1, 0, 2, 2, 0, 0, 0, 0, 0, () => Ipv6CidrBlockAssociationList]
);
export var AwsEc2TransitGatewayDetails = struct(
  n0,
  _AETGD,
  0,
  [_I, _D, _DRTP, _AASA, _DRTA, _TGCB, _ADRTI, _PDRTI, _VES, _DSn, _MSu, _ASA],
  [0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 1]
);
export var AwsEc2VolumeAttachment = struct(n0, _AEVA, 0, [_ATtt, _DOT, _IIn, _St], [0, 2, 0, 0]);
export var AwsEc2VolumeDetails = struct(
  n0,
  _AEVD,
  0,
  [_CTre, _DN, _En, _Si, _SIn, _St, _KKI, _Att, _VIo, _VT, _VSS],
  [0, 0, 2, 1, 0, 0, 0, () => AwsEc2VolumeAttachmentList, 0, 0, 0]
);
export var AwsEc2VpcDetails = struct(
  n0,
  _AEVDw,
  0,
  [_CBAS, _ICBAS, _DOI, _Sta],
  [() => CidrBlockAssociationList, () => Ipv6CidrBlockAssociationList, 0, 0]
);
export var AwsEc2VpcEndpointServiceDetails = struct(
  n0,
  _AEVESD,
  0,
  [_ARc, _AZv, _BEDN, _MVE, _GLBA, _NLBA, _PDNr, _SIer, _SN, _SSe, _STe],
  [2, 64 | 0, 64 | 0, 2, 64 | 0, 64 | 0, 0, 0, 0, 0, () => AwsEc2VpcEndpointServiceServiceTypeList]
);
export var AwsEc2VpcEndpointServiceServiceTypeDetails = struct(n0, _AEVESSTD, 0, [_STe], [0]);
export var AwsEc2VpcPeeringConnectionDetails = struct(
  n0,
  _AEVPCD,
  0,
  [_AVI, _ETx, _RVI, _St, _VPCI],
  [
    () => AwsEc2VpcPeeringConnectionVpcInfoDetails,
    0,
    () => AwsEc2VpcPeeringConnectionVpcInfoDetails,
    () => AwsEc2VpcPeeringConnectionStatusDetails,
    0,
  ]
);
export var AwsEc2VpcPeeringConnectionStatusDetails = struct(n0, _AEVPCSD, 0, [_C, _M], [0, 0]);
export var AwsEc2VpcPeeringConnectionVpcInfoDetails = struct(
  n0,
  _AEVPCVID,
  0,
  [_CBi, _CBS, _ICBS, _OIw, _PO, _Reg, _VIp],
  [0, () => VpcInfoCidrBlockSetList, () => VpcInfoIpv6CidrBlockSetList, 0, () => VpcInfoPeeringOptionsDetails, 0, 0]
);
export var AwsEc2VpnConnectionDetails = struct(
  n0,
  _AEVCD,
  0,
  [_VCI, _Sta, _CGI, _CGC, _T, _VGI, _Cat, _VTg, _Op, _Ro, _TGI],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => AwsEc2VpnConnectionVgwTelemetryList,
    () => AwsEc2VpnConnectionOptionsDetails,
    () => AwsEc2VpnConnectionRoutesList,
    0,
  ]
);
export var AwsEc2VpnConnectionOptionsDetails = struct(
  n0,
  _AEVCOD,
  0,
  [_SRO, _TO],
  [2, () => AwsEc2VpnConnectionOptionsTunnelOptionsList]
);
export var AwsEc2VpnConnectionOptionsTunnelOptionsDetails = struct(
  n0,
  _AEVCOTOD,
  0,
  [_DTS, _IV, _OIA, _PDGN, _PEA, _PIAh, _PLS, _PDGNh, _PEAh, _PIAha, _PLSh, _PSK, _RFP, _RMTS, _RWS, _TIC],
  [1, 64 | 0, 0, 64 | 1, 64 | 0, 64 | 0, 1, 64 | 1, 64 | 0, 64 | 0, 1, 0, 1, 1, 1, 0]
);
export var AwsEc2VpnConnectionRoutesDetails = struct(n0, _AEVCRD, 0, [_DCBe, _Sta], [0, 0]);
export var AwsEc2VpnConnectionVgwTelemetryDetails = struct(
  n0,
  _AEVCVTD,
  0,
  [_ARCc, _CAe, _LSC, _OIA, _St, _SM],
  [1, 0, 0, 0, 0, 0]
);
export var AwsEcrContainerImageDetails = struct(
  n0,
  _AECID,
  0,
  [_RIeg, _RNep, _Arc, _IDm, _ITm, _IPA],
  [0, 0, 0, 0, 64 | 0, 0]
);
export var AwsEcrRepositoryDetails = struct(
  n0,
  _AERD,
  0,
  [_Ar, _ISC, _ITM, _LP, _RNep, _RPT],
  [0, () => AwsEcrRepositoryImageScanningConfigurationDetails, 0, () => AwsEcrRepositoryLifecyclePolicyDetails, 0, 0]
);
export var AwsEcrRepositoryImageScanningConfigurationDetails = struct(n0, _AERISCD, 0, [_SOP], [2]);
export var AwsEcrRepositoryLifecyclePolicyDetails = struct(n0, _AERLPD, 0, [_LPT, _RIeg], [0, 0]);
export var AwsEcsClusterClusterSettingsDetails = struct(n0, _AECCSD, 0, [_N, _Val], [0, 0]);
export var AwsEcsClusterConfigurationDetails = struct(
  n0,
  _AECCD,
  0,
  [_ECC],
  [() => AwsEcsClusterConfigurationExecuteCommandConfigurationDetails]
);
export var AwsEcsClusterConfigurationExecuteCommandConfigurationDetails = struct(
  n0,
  _AECCECCD,
  0,
  [_KKI, _LCog, _Lo],
  [0, () => AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails, 0]
);
export var AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails = struct(
  n0,
  _AECCECCLCD,
  0,
  [_CWEE, _CWLGN, _SBN, _SEE, _SKP],
  [2, 0, 0, 2, 0]
);
export var AwsEcsClusterDefaultCapacityProviderStrategyDetails = struct(n0, _AECDCPSD, 0, [_Bas, _CPa, _We], [1, 0, 1]);
export var AwsEcsClusterDetails = struct(
  n0,
  _AECD,
  0,
  [_CAl, _ASC, _CPap, _CSl, _Conf, _DCPS, _CNl, _RCIC, _RTC, _St],
  [
    0,
    1,
    64 | 0,
    () => AwsEcsClusterClusterSettingsList,
    () => AwsEcsClusterConfigurationDetails,
    () => AwsEcsClusterDefaultCapacityProviderStrategyList,
    0,
    1,
    1,
    0,
  ]
);
export var AwsEcsContainerDetails = struct(n0, _AECDw, 0, [_N, _Im, _MPo, _Priv], [0, 0, () => AwsMountPointList, 2]);
export var AwsEcsServiceCapacityProviderStrategyDetails = struct(n0, _AESCPSD, 0, [_Bas, _CPa, _We], [1, 0, 1]);
export var AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails = struct(
  n0,
  _AESDCDCBD,
  0,
  [_Enab, _Rol],
  [2, 2]
);
export var AwsEcsServiceDeploymentConfigurationDetails = struct(
  n0,
  _AESDCD,
  0,
  [_DCBep, _MPa, _MHP],
  [() => AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails, 1, 1]
);
export var AwsEcsServiceDeploymentControllerDetails = struct(n0, _AESDCDw, 0, [_T], [0]);
export var AwsEcsServiceDetails = struct(
  n0,
  _AESDw,
  0,
  [
    _CPS,
    _Cl,
    _DC,
    _DCe,
    _DCes,
    _EEMT,
    _EEC,
    _HCGPS,
    _LTa,
    _LB,
    _N,
    _NC,
    _PCl,
    _PSl,
    _PV,
    _PTrop,
    _Role,
    _SSc,
    _SAer,
    _SN,
    _SRe,
    _TDa,
  ],
  [
    () => AwsEcsServiceCapacityProviderStrategyList,
    0,
    () => AwsEcsServiceDeploymentConfigurationDetails,
    () => AwsEcsServiceDeploymentControllerDetails,
    1,
    2,
    2,
    1,
    0,
    () => AwsEcsServiceLoadBalancersList,
    0,
    () => AwsEcsServiceNetworkConfigurationDetails,
    () => AwsEcsServicePlacementConstraintsList,
    () => AwsEcsServicePlacementStrategiesList,
    0,
    0,
    0,
    0,
    0,
    0,
    () => AwsEcsServiceServiceRegistriesList,
    0,
  ]
);
export var AwsEcsServiceLoadBalancersDetails = struct(n0, _AESLBD, 0, [_CNo, _CPo, _LBNo, _TGA], [0, 1, 0, 0]);
export var AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails = struct(
  n0,
  _AESNCAVCD,
  0,
  [_API, _SG, _Sub],
  [0, 64 | 0, 64 | 0]
);
export var AwsEcsServiceNetworkConfigurationDetails = struct(
  n0,
  _AESNCD,
  0,
  [_AVC],
  [() => AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails]
);
export var AwsEcsServicePlacementConstraintsDetails = struct(n0, _AESPCD, 0, [_Ex, _T], [0, 0]);
export var AwsEcsServicePlacementStrategiesDetails = struct(n0, _AESPSD, 0, [_Fi, _T], [0, 0]);
export var AwsEcsServiceServiceRegistriesDetails = struct(n0, _AESSRD, 0, [_CNo, _CPo, _P, _RAeg], [0, 1, 1, 0]);
export var AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails = struct(n0, _AETDCDDOD, 0, [_Cond, _CNo], [0, 0]);
export var AwsEcsTaskDefinitionContainerDefinitionsDetails = struct(
  n0,
  _AETDCDD,
  0,
  [
    _Comm,
    _Cp,
    _DO,
    _DNi,
    _DSD,
    _DSns,
    _DL,
    _DSO,
    _EPn,
    _Env,
    _EF,
    _Es,
    _EHx,
    _FCi,
    _HC,
    _Ho,
    _Im,
    _In,
    _Lin,
    _LPi,
    _LCog,
    _Mem,
    _MR,
    _MPo,
    _N,
    _PMo,
    _Priv,
    _PTs,
    _RRF,
    _RCep,
    _RRes,
    _Sec,
    _STt,
    _STto,
    _SCy,
    _Ul,
    _U,
    _VF,
    _WD,
  ],
  [
    64 | 0,
    1,
    () => AwsEcsTaskDefinitionContainerDefinitionsDependsOnList,
    2,
    64 | 0,
    64 | 0,
    128 | 0,
    64 | 0,
    64 | 0,
    () => AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList,
    () => AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList,
    2,
    () => AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList,
    () => AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
    () => AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails,
    0,
    0,
    2,
    64 | 0,
    () => AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
    () => AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
    1,
    1,
    () => AwsEcsTaskDefinitionContainerDefinitionsMountPointsList,
    0,
    () => AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList,
    2,
    2,
    2,
    () => AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
    () => AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList,
    () => AwsEcsTaskDefinitionContainerDefinitionsSecretsList,
    1,
    1,
    () => AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList,
    () => AwsEcsTaskDefinitionContainerDefinitionsUlimitsList,
    0,
    () => AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList,
    0,
  ]
);
export var AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails = struct(n0, _AETDCDED, 0, [_N, _Val], [0, 0]);
export var AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails = struct(
  n0,
  _AETDCDEFD,
  0,
  [_T, _Val],
  [0, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails = struct(n0, _AETDCDEHD, 0, [_Ho, _IApd], [0, 0]);
export var AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails = struct(
  n0,
  _AETDCDFCD,
  0,
  [_Op, _T],
  [128 | 0, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails = struct(
  n0,
  _AETDCDHCD,
  0,
  [_Comm, _Int, _Ret, _SPt, _Tim],
  [64 | 0, 1, 1, 1, 1]
);
export var AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails = struct(
  n0,
  _AETDCDLPCD,
  0,
  [_Add, _Dr],
  [64 | 0, 64 | 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails = struct(
  n0,
  _AETDCDLPD,
  0,
  [_Ca, _De, _IPEn, _MSa, _SMS, _Sw, _Tm],
  [
    () => AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails,
    () => AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList,
    2,
    1,
    1,
    1,
    () => AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList,
  ]
);
export var AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails = struct(
  n0,
  _AETDCDLPDD,
  0,
  [_CPon, _HPo, _Perm],
  [0, 0, 64 | 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails = struct(
  n0,
  _AETDCDLPTD,
  0,
  [_CPon, _MOo, _Si],
  [0, 64 | 0, 1]
);
export var AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails = struct(
  n0,
  _AETDCDLCD,
  0,
  [_LD, _Op, _SOe],
  [0, 128 | 0, () => AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList]
);
export var AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails = struct(
  n0,
  _AETDCDLCSOD,
  0,
  [_N, _VFa],
  [0, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails = struct(
  n0,
  _AETDCDMPD,
  0,
  [_CPon, _ROe, _SVo],
  [0, 2, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails = struct(
  n0,
  _AETDCDPMD,
  0,
  [_CPo, _HPos, _Prot],
  [1, 1, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails = struct(
  n0,
  _AETDCDRCD,
  0,
  [_CPr],
  [0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails = struct(
  n0,
  _AETDCDRRD,
  0,
  [_T, _Val],
  [0, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails = struct(n0, _AETDCDSD, 0, [_N, _VFa], [0, 0]);
export var AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails = struct(
  n0,
  _AETDCDSCD,
  0,
  [_Na, _Val],
  [0, 0]
);
export var AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails = struct(
  n0,
  _AETDCDUD,
  0,
  [_HL, _N, _SLof],
  [1, 0, 1]
);
export var AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails = struct(n0, _AETDCDVFD, 0, [_ROe, _SCo], [2, 0]);
export var AwsEcsTaskDefinitionDetails = struct(
  n0,
  _AETDD,
  0,
  [_CDon, _Cp, _ERA, _Fa, _IAnf, _IMp, _Mem, _NM, _PMi, _PCl, _PCr, _RCeq, _TRA, _Vo, _St],
  [
    () => AwsEcsTaskDefinitionContainerDefinitionsList,
    0,
    0,
    0,
    () => AwsEcsTaskDefinitionInferenceAcceleratorsList,
    0,
    0,
    0,
    0,
    () => AwsEcsTaskDefinitionPlacementConstraintsList,
    () => AwsEcsTaskDefinitionProxyConfigurationDetails,
    64 | 0,
    0,
    () => AwsEcsTaskDefinitionVolumesList,
    0,
  ]
);
export var AwsEcsTaskDefinitionInferenceAcceleratorsDetails = struct(n0, _AETDIAD, 0, [_DN, _DT], [0, 0]);
export var AwsEcsTaskDefinitionPlacementConstraintsDetails = struct(n0, _AETDPCD, 0, [_Ex, _T], [0, 0]);
export var AwsEcsTaskDefinitionProxyConfigurationDetails = struct(
  n0,
  _AETDPCDw,
  0,
  [_CNo, _PCP, _T],
  [0, () => AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList, 0]
);
export var AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails = struct(
  n0,
  _AETDPCPCPD,
  0,
  [_N, _Val],
  [0, 0]
);
export var AwsEcsTaskDefinitionVolumesDetails = struct(
  n0,
  _AETDVD,
  0,
  [_DVC, _EVCf, _Hos, _N],
  [
    () => AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails,
    () => AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails,
    () => AwsEcsTaskDefinitionVolumesHostDetails,
    0,
  ]
);
export var AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails = struct(
  n0,
  _AETDVDVCD,
  0,
  [_Aut, _Dri, _DOr, _La, _Sc],
  [2, 0, 128 | 0, 128 | 0, 0]
);
export var AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails = struct(
  n0,
  _AETDVEVCACD,
  0,
  [_APIc, _Ia],
  [0, 0]
);
export var AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails = struct(
  n0,
  _AETDVEVCD,
  0,
  [_ACu, _FI, _RD, _TEr, _TEP],
  [() => AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails, 0, 0, 0, 1]
);
export var AwsEcsTaskDefinitionVolumesHostDetails = struct(n0, _AETDVHD, 0, [_SPo], [0]);
export var AwsEcsTaskDetails = struct(
  n0,
  _AETD,
  0,
  [_CAl, _TDA, _V, _CA, _SAt, _SB, _Gro, _Vo, _Cont],
  [0, 0, 0, 0, 0, 0, 0, () => AwsEcsTaskVolumeDetailsList, () => AwsEcsContainerDetailsList]
);
export var AwsEcsTaskVolumeDetails = struct(n0, _AETVD, 0, [_N, _Hos], [0, () => AwsEcsTaskVolumeHostDetails]);
export var AwsEcsTaskVolumeHostDetails = struct(n0, _AETVHD, 0, [_SPo], [0]);
export var AwsEfsAccessPointDetails = struct(
  n0,
  _AEAPD,
  0,
  [_APIc, _Ar, _CTl, _FSI, _PU, _RD],
  [0, 0, 0, 0, () => AwsEfsAccessPointPosixUserDetails, () => AwsEfsAccessPointRootDirectoryDetails]
);
export var AwsEfsAccessPointPosixUserDetails = struct(n0, _AEAPPUD, 0, [_Gi, _SGe, _Ui], [0, 64 | 0, 0]);
export var AwsEfsAccessPointRootDirectoryCreationInfoDetails = struct(n0, _AEAPRDCID, 0, [_OGw, _OU, _Perm], [0, 0, 0]);
export var AwsEfsAccessPointRootDirectoryDetails = struct(
  n0,
  _AEAPRDD,
  0,
  [_CIr, _Pat],
  [() => AwsEfsAccessPointRootDirectoryCreationInfoDetails, 0]
);
export var AwsEksClusterDetails = struct(
  n0,
  _AECDws,
  0,
  [_Ar, _CAD, _CSlu, _End, _N, _RVC, _RAo, _V, _Lo],
  [0, 0, 0, 0, 0, () => AwsEksClusterResourcesVpcConfigDetails, 0, 0, () => AwsEksClusterLoggingDetails]
);
export var AwsEksClusterLoggingClusterLoggingDetails = struct(n0, _AECLCLD, 0, [_Ena, _Ty], [2, 64 | 0]);
export var AwsEksClusterLoggingDetails = struct(n0, _AECLD, 0, [_CLl], [() => AwsEksClusterLoggingClusterLoggingList]);
export var AwsEksClusterResourcesVpcConfigDetails = struct(n0, _AECRVCD, 0, [_SGI, _SIub, _EPA], [64 | 0, 64 | 0, 2]);
export var AwsElasticBeanstalkEnvironmentDetails = struct(
  n0,
  _AEBED,
  0,
  [_ANp, _Cn, _DCa, _DU, _D, _EU, _EAn, _EIn, _EL, _ENn, _OS, _PAl, _SSN, _St, _Tie, _VL],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => AwsElasticBeanstalkEnvironmentEnvironmentLinks,
    0,
    () => AwsElasticBeanstalkEnvironmentOptionSettings,
    0,
    0,
    0,
    () => AwsElasticBeanstalkEnvironmentTier,
    0,
  ]
);
export var AwsElasticBeanstalkEnvironmentEnvironmentLink = struct(n0, _AEBEEL, 0, [_ENn, _LN], [0, 0]);
export var AwsElasticBeanstalkEnvironmentOptionSetting = struct(n0, _AEBEOS, 0, [_Na, _ON, _RNes, _Val], [0, 0, 0, 0]);
export var AwsElasticBeanstalkEnvironmentTier = struct(n0, _AEBET, 0, [_N, _T, _V], [0, 0, 0]);
export var AwsElasticsearchDomainDetails = struct(
  n0,
  _AEDD,
  0,
  [_APc, _DEO, _DIo, _DNo, _End, _Endp, _EVl, _ECCl, _EARO, _LPO, _NTNEO, _SSO, _VPCO],
  [
    0,
    () => AwsElasticsearchDomainDomainEndpointOptions,
    0,
    0,
    0,
    128 | 0,
    0,
    () => AwsElasticsearchDomainElasticsearchClusterConfigDetails,
    () => AwsElasticsearchDomainEncryptionAtRestOptions,
    () => AwsElasticsearchDomainLogPublishingOptions,
    () => AwsElasticsearchDomainNodeToNodeEncryptionOptions,
    () => AwsElasticsearchDomainServiceSoftwareOptions,
    () => AwsElasticsearchDomainVPCOptions,
  ]
);
export var AwsElasticsearchDomainDomainEndpointOptions = struct(n0, _AEDDEO, 0, [_EHTTPS, _TLSSP], [2, 0]);
export var AwsElasticsearchDomainElasticsearchClusterConfigDetails = struct(
  n0,
  _AEDECCD,
  0,
  [_DMC, _DMEe, _DMT, _ICn, _ITn, _ZAC, _ZAE],
  [1, 2, 0, 1, 0, () => AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails, 2]
);
export var AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails = struct(
  n0,
  _AEDECCZACD,
  0,
  [_AZC],
  [1]
);
export var AwsElasticsearchDomainEncryptionAtRestOptions = struct(n0, _AEDEARO, 0, [_Ena, _KKI], [2, 0]);
export var AwsElasticsearchDomainLogPublishingOptions = struct(
  n0,
  _AEDLPO,
  0,
  [_ISL, _SSL, _AL],
  [
    () => AwsElasticsearchDomainLogPublishingOptionsLogConfig,
    () => AwsElasticsearchDomainLogPublishingOptionsLogConfig,
    () => AwsElasticsearchDomainLogPublishingOptionsLogConfig,
  ]
);
export var AwsElasticsearchDomainLogPublishingOptionsLogConfig = struct(n0, _AEDLPOLC, 0, [_CWLLGA, _Ena], [0, 2]);
export var AwsElasticsearchDomainNodeToNodeEncryptionOptions = struct(n0, _AEDNTNEO, 0, [_Ena], [2]);
export var AwsElasticsearchDomainServiceSoftwareOptions = struct(
  n0,
  _AEDSSO,
  0,
  [_AUD, _Can, _CV, _D, _NV, _UAp, _US],
  [0, 2, 0, 0, 0, 2, 0]
);
export var AwsElasticsearchDomainVPCOptions = struct(
  n0,
  _AEDVPCO,
  0,
  [_AZv, _SGI, _SIub, _VPCId],
  [64 | 0, 64 | 0, 64 | 0, 0]
);
export var AwsElbAppCookieStickinessPolicy = struct(n0, _AEACSP, 0, [_CNoo, _PNo], [0, 0]);
export var AwsElbLbCookieStickinessPolicy = struct(n0, _AELCSP, 0, [_CEP, _PNo], [1, 0]);
export var AwsElbLoadBalancerAccessLog = struct(n0, _AELBAL, 0, [_EIm, _Ena, _SBN, _SBP], [1, 2, 0, 0]);
export var AwsElbLoadBalancerAdditionalAttribute = struct(n0, _AELBAA, 0, [_K, _Val], [0, 0]);
export var AwsElbLoadBalancerAttributes = struct(
  n0,
  _AELBA,
  0,
  [_ALc, _CDonn, _CSo, _CZLB, _AAd],
  [
    () => AwsElbLoadBalancerAccessLog,
    () => AwsElbLoadBalancerConnectionDraining,
    () => AwsElbLoadBalancerConnectionSettings,
    () => AwsElbLoadBalancerCrossZoneLoadBalancing,
    () => AwsElbLoadBalancerAdditionalAttributeList,
  ]
);
export var AwsElbLoadBalancerBackendServerDescription = struct(n0, _AELBBSD, 0, [_IPn, _PNol], [1, 64 | 0]);
export var AwsElbLoadBalancerConnectionDraining = struct(n0, _AELBCD, 0, [_Ena, _Tim], [2, 1]);
export var AwsElbLoadBalancerConnectionSettings = struct(n0, _AELBCS, 0, [_ITd], [1]);
export var AwsElbLoadBalancerCrossZoneLoadBalancing = struct(n0, _AELBCZLB, 0, [_Ena], [2]);
export var AwsElbLoadBalancerDetails = struct(
  n0,
  _AELBD,
  0,
  [_AZv, _BSD, _CHZN, _CHZNID, _CT, _DNn, _HC, _Ins, _LDi, _LBA, _LBNo, _Po, _Sch, _SG, _SSG, _Sub, _VIp],
  [
    64 | 0,
    () => AwsElbLoadBalancerBackendServerDescriptions,
    0,
    0,
    0,
    0,
    () => AwsElbLoadBalancerHealthCheck,
    () => AwsElbLoadBalancerInstances,
    () => AwsElbLoadBalancerListenerDescriptions,
    () => AwsElbLoadBalancerAttributes,
    0,
    () => AwsElbLoadBalancerPolicies,
    0,
    64 | 0,
    () => AwsElbLoadBalancerSourceSecurityGroup,
    64 | 0,
    0,
  ]
);
export var AwsElbLoadBalancerHealthCheck = struct(n0, _AELBHC, 0, [_HTe, _Int, _Ta, _Tim, _UT], [1, 1, 0, 1, 1]);
export var AwsElbLoadBalancerInstance = struct(n0, _AELBI, 0, [_IIn], [0]);
export var AwsElbLoadBalancerListener = struct(n0, _AELBL, 0, [_IPn, _IPns, _LBP, _Prot, _SCI], [1, 0, 1, 0, 0]);
export var AwsElbLoadBalancerListenerDescription = struct(
  n0,
  _AELBLD,
  0,
  [_Lis, _PNol],
  [() => AwsElbLoadBalancerListener, 64 | 0]
);
export var AwsElbLoadBalancerPolicies = struct(
  n0,
  _AELBP,
  0,
  [_ACSP, _LCSP, _OPt],
  [() => AwsElbAppCookieStickinessPolicies, () => AwsElbLbCookieStickinessPolicies, 64 | 0]
);
export var AwsElbLoadBalancerSourceSecurityGroup = struct(n0, _AELBSSG, 0, [_GN, _OAw], [0, 0]);
export var AwsElbv2LoadBalancerAttribute = struct(n0, _AELBAw, 0, [_K, _Val], [0, 0]);
export var AwsElbv2LoadBalancerDetails = struct(
  n0,
  _AELBDw,
  0,
  [_AZv, _CHZI, _CT, _DNSN, _IAT, _Sch, _SG, _Sta, _T, _VIp, _LBA],
  [() => AvailabilityZones, 0, 0, 0, 0, 0, 64 | 0, () => LoadBalancerState, 0, 0, () => AwsElbv2LoadBalancerAttributes]
);
export var AwsEventSchemasRegistryDetails = struct(n0, _AESRD, 0, [_D, _RAeg, _RNeg], [0, 0, 0]);
export var AwsEventsEndpointDetails = struct(
  n0,
  _AEEDw,
  0,
  [_Ar, _D, _EInd, _EU, _EB, _N, _RCepl, _RAo, _RCo, _Sta, _SRt],
  [
    0,
    0,
    0,
    0,
    () => AwsEventsEndpointEventBusesList,
    0,
    () => AwsEventsEndpointReplicationConfigDetails,
    0,
    () => AwsEventsEndpointRoutingConfigDetails,
    0,
    0,
  ]
);
export var AwsEventsEndpointEventBusesDetails = struct(n0, _AEEEBD, 0, [_EBA], [0]);
export var AwsEventsEndpointReplicationConfigDetails = struct(n0, _AEERCD, 0, [_Sta], [0]);
export var AwsEventsEndpointRoutingConfigDetails = struct(
  n0,
  _AEERCDw,
  0,
  [_FCa],
  [() => AwsEventsEndpointRoutingConfigFailoverConfigDetails]
);
export var AwsEventsEndpointRoutingConfigFailoverConfigDetails = struct(
  n0,
  _AEERCFCD,
  0,
  [_Pri, _Seco],
  [
    () => AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails,
    () => AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails,
  ]
);
export var AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails = struct(n0, _AEERCFCPD, 0, [_HC], [0]);
export var AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails = struct(n0, _AEERCFCSD, 0, [_Rou], [0]);
export var AwsEventsEventbusDetails = struct(n0, _AEEDws, 0, [_Ar, _N, _Pol], [0, 0, 0]);
export var AwsGuardDutyDetectorDataSourcesCloudTrailDetails = struct(n0, _AGDDDSCTD, 0, [_St], [0]);
export var AwsGuardDutyDetectorDataSourcesDetails = struct(
  n0,
  _AGDDDSD,
  0,
  [_CTlo, _DLn, _FL, _Ku, _MPal, _SLo],
  [
    () => AwsGuardDutyDetectorDataSourcesCloudTrailDetails,
    () => AwsGuardDutyDetectorDataSourcesDnsLogsDetails,
    () => AwsGuardDutyDetectorDataSourcesFlowLogsDetails,
    () => AwsGuardDutyDetectorDataSourcesKubernetesDetails,
    () => AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails,
    () => AwsGuardDutyDetectorDataSourcesS3LogsDetails,
  ]
);
export var AwsGuardDutyDetectorDataSourcesDnsLogsDetails = struct(n0, _AGDDDSDLD, 0, [_St], [0]);
export var AwsGuardDutyDetectorDataSourcesFlowLogsDetails = struct(n0, _AGDDDSFLD, 0, [_St], [0]);
export var AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails = struct(n0, _AGDDDSKALD, 0, [_St], [0]);
export var AwsGuardDutyDetectorDataSourcesKubernetesDetails = struct(
  n0,
  _AGDDDSKD,
  0,
  [_AL],
  [() => AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails]
);
export var AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails = struct(
  n0,
  _AGDDDSMPD,
  0,
  [_SEIWF, _SR],
  [() => AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails, 0]
);
export var AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails = struct(
  n0,
  _AGDDDSMPSEIWFD,
  0,
  [_EVb],
  [() => AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails]
);
export var AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails = struct(
  n0,
  _AGDDDSMPSEIWFEVD,
  0,
  [_R, _St],
  [0, 0]
);
export var AwsGuardDutyDetectorDataSourcesS3LogsDetails = struct(n0, _AGDDDSSLD, 0, [_St], [0]);
export var AwsGuardDutyDetectorDetails = struct(
  n0,
  _AGDDD,
  0,
  [_DSa, _Fe, _FPF, _SR, _St],
  [() => AwsGuardDutyDetectorDataSourcesDetails, () => AwsGuardDutyDetectorFeaturesList, 0, 0, 0]
);
export var AwsGuardDutyDetectorFeaturesDetails = struct(n0, _AGDDFD, 0, [_N, _St], [0, 0]);
export var AwsIamAccessKeyDetails = struct(
  n0,
  _AIAKD,
  0,
  [_UN, _St, _CA, _PIr, _PTri, _PNri, _AIc, _AKI, _SCe],
  [0, 0, 0, 0, 0, 0, 0, 0, () => AwsIamAccessKeySessionContext]
);
export var AwsIamAccessKeySessionContext = struct(
  n0,
  _AIAKSC,
  0,
  [_Attr, _SIes],
  [() => AwsIamAccessKeySessionContextAttributes, () => AwsIamAccessKeySessionContextSessionIssuer]
);
export var AwsIamAccessKeySessionContextAttributes = struct(n0, _AIAKSCA, 0, [_MAf, _CDr], [2, 0]);
export var AwsIamAccessKeySessionContextSessionIssuer = struct(
  n0,
  _AIAKSCSI,
  0,
  [_T, _PIr, _Ar, _AIc, _UN],
  [0, 0, 0, 0, 0]
);
export var AwsIamAttachedManagedPolicy = struct(n0, _AIAMP, 0, [_PNo, _PAo], [0, 0]);
export var AwsIamGroupDetails = struct(
  n0,
  _AIGD,
  0,
  [_AMP, _CDre, _GIr, _GN, _GPL, _Pat],
  [() => AwsIamAttachedManagedPolicyList, 0, 0, 0, () => AwsIamGroupPolicyList, 0]
);
export var AwsIamGroupPolicy = struct(n0, _AIGP, 0, [_PNo], [0]);
export var AwsIamInstanceProfile = struct(
  n0,
  _AIIP,
  0,
  [_Ar, _CDre, _IPI, _IPN, _Pat, _Roles],
  [0, 0, 0, 0, 0, () => AwsIamInstanceProfileRoles]
);
export var AwsIamInstanceProfileRole = struct(
  n0,
  _AIIPR,
  0,
  [_Ar, _ARPDs, _CDre, _Pat, _RIo, _RNo],
  [0, 0, 0, 0, 0, 0]
);
export var AwsIamPermissionsBoundary = struct(n0, _AIPB, 0, [_PBA, _PBT], [0, 0]);
export var AwsIamPolicyDetails = struct(
  n0,
  _AIPD,
  0,
  [_ACt, _CDre, _DVI, _D, _IAst, _Pat, _PBUC, _PIo, _PNo, _PVL, _UDp],
  [1, 0, 0, 0, 2, 0, 1, 0, 0, () => AwsIamPolicyVersionList, 0]
);
export var AwsIamPolicyVersion = struct(n0, _AIPV, 0, [_VI, _IDV, _CDre], [0, 2, 0]);
export var AwsIamRoleDetails = struct(
  n0,
  _AIRD,
  0,
  [_ARPDs, _AMP, _CDre, _IPL, _PB, _RIo, _RNo, _RPL, _MSD, _Pat],
  [
    0,
    () => AwsIamAttachedManagedPolicyList,
    0,
    () => AwsIamInstanceProfileList,
    () => AwsIamPermissionsBoundary,
    0,
    0,
    () => AwsIamRolePolicyList,
    1,
    0,
  ]
);
export var AwsIamRolePolicy = struct(n0, _AIRP, 0, [_PNo], [0]);
export var AwsIamUserDetails = struct(
  n0,
  _AIUD,
  0,
  [_AMP, _CDre, _GLr, _Pat, _PB, _UI, _UN, _UPL],
  [
    () => AwsIamAttachedManagedPolicyList,
    0,
    64 | 0,
    0,
    () => AwsIamPermissionsBoundary,
    0,
    0,
    () => AwsIamUserPolicyList,
  ]
);
export var AwsIamUserPolicy = struct(n0, _AIUP, 0, [_PNo], [0]);
export var AwsKinesisStreamDetails = struct(
  n0,
  _AKSD,
  0,
  [_N, _Ar, _SEtr, _SCh, _RPH],
  [0, 0, () => AwsKinesisStreamStreamEncryptionDetails, 1, 1]
);
export var AwsKinesisStreamStreamEncryptionDetails = struct(n0, _AKSSED, 0, [_ETnc, _KIe], [0, 0]);
export var AwsKmsKeyDetails = struct(
  n0,
  _AKKD,
  0,
  [_AWSAI, _CDr, _KIe, _KM, _KSe, _Ori, _D, _KRS],
  [0, 1, 0, 0, 0, 0, 0, 2]
);
export var AwsLambdaFunctionCode = struct(n0, _ALFC, 0, [_SBu, _SK, _SOV, _ZF], [0, 0, 0, 0]);
export var AwsLambdaFunctionDeadLetterConfig = struct(n0, _ALFDLC, 0, [_TAa], [0]);
export var AwsLambdaFunctionDetails = struct(
  n0,
  _ALFD,
  0,
  [_C, _CSod, _DLC, _Env, _FN, _Ha, _KKA, _LM, _Lay, _MAa, _MSem, _RIev, _Role, _Ru, _Tim, _TC, _VCp, _V, _Arch, _PTa],
  [
    () => AwsLambdaFunctionCode,
    0,
    () => AwsLambdaFunctionDeadLetterConfig,
    () => AwsLambdaFunctionEnvironment,
    0,
    0,
    0,
    0,
    () => AwsLambdaFunctionLayerList,
    0,
    1,
    0,
    0,
    0,
    1,
    () => AwsLambdaFunctionTracingConfig,
    () => AwsLambdaFunctionVpcConfig,
    0,
    64 | 0,
    0,
  ]
);
export var AwsLambdaFunctionEnvironment = struct(
  n0,
  _ALFE,
  0,
  [_Va, _Er],
  [128 | 0, () => AwsLambdaFunctionEnvironmentError]
);
export var AwsLambdaFunctionEnvironmentError = struct(n0, _ALFEE, 0, [_ECr, _M], [0, 0]);
export var AwsLambdaFunctionLayer = struct(n0, _ALFL, 0, [_Ar, _CSode], [0, 1]);
export var AwsLambdaFunctionTracingConfig = struct(n0, _ALFTC, 0, [_Mod], [0]);
export var AwsLambdaFunctionVpcConfig = struct(n0, _ALFVC, 0, [_SGI, _SIub, _VIp], [64 | 0, 64 | 0, 0]);
export var AwsLambdaLayerVersionDetails = struct(n0, _ALLVD, 0, [_V, _CRo, _CD], [1, 64 | 0, 0]);
export var AwsMountPoint = struct(n0, _AMPw, 0, [_SVo, _CPon], [0, 0]);
export var AwsMskClusterClusterInfoClientAuthenticationDetails = struct(
  n0,
  _AMCCICAD,
  0,
  [_Sa, _Una, _Tl],
  [
    () => AwsMskClusterClusterInfoClientAuthenticationSaslDetails,
    () => AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails,
    () => AwsMskClusterClusterInfoClientAuthenticationTlsDetails,
  ]
);
export var AwsMskClusterClusterInfoClientAuthenticationSaslDetails = struct(
  n0,
  _AMCCICASD,
  0,
  [_Ia, _Scr],
  [
    () => AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails,
    () => AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails,
  ]
);
export var AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails = struct(n0, _AMCCICASID, 0, [_Ena], [2]);
export var AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails = struct(n0, _AMCCICASSD, 0, [_Ena], [2]);
export var AwsMskClusterClusterInfoClientAuthenticationTlsDetails = struct(
  n0,
  _AMCCICATD,
  0,
  [_CAAL, _Ena],
  [64 | 0, 2]
);
export var AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails = struct(n0, _AMCCICAUD, 0, [_Ena], [2]);
export var AwsMskClusterClusterInfoDetails = struct(
  n0,
  _AMCCID,
  0,
  [_EInc, _CV, _NOBN, _CNl, _CAli, _EM],
  [
    () => AwsMskClusterClusterInfoEncryptionInfoDetails,
    0,
    1,
    0,
    () => AwsMskClusterClusterInfoClientAuthenticationDetails,
    0,
  ]
);
export var AwsMskClusterClusterInfoEncryptionInfoDetails = struct(
  n0,
  _AMCCIEID,
  0,
  [_EITn, _EAR],
  [
    () => AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails,
    () => AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails,
  ]
);
export var AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails = struct(n0, _AMCCIEIEARD, 0, [_DVKMSKI], [0]);
export var AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails = struct(
  n0,
  _AMCCIEIEITD,
  0,
  [_ICnl, _CBl],
  [2, 0]
);
export var AwsMskClusterDetails = struct(n0, _AMCD, 0, [_CIl], [() => AwsMskClusterClusterInfoDetails]);
export var AwsNetworkFirewallFirewallDetails = struct(
  n0,
  _ANFFD,
  0,
  [_DP, _D, _FAi, _FIi, _FNi, _FPA, _FPCP, _SCP, _SMu, _VIp],
  [2, 0, 0, 0, 0, 0, 2, 2, () => AwsNetworkFirewallFirewallSubnetMappingsList, 0]
);
export var AwsNetworkFirewallFirewallPolicyDetails = struct(
  n0,
  _ANFFPD,
  0,
  [_FPi, _FPA, _FPI, _FPN, _D],
  [() => FirewallPolicyDetails, 0, 0, 0, 0]
);
export var AwsNetworkFirewallFirewallSubnetMappingsDetails = struct(n0, _ANFFSMD, 0, [_SIu], [0]);
export var AwsNetworkFirewallRuleGroupDetails = struct(
  n0,
  _ANFRGD,
  0,
  [_Cap, _D, _RG, _RGA, _RGI, _RGN, _T],
  [1, 0, () => RuleGroupDetails, 0, 0, 0, 0]
);
export var AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails = struct(
  n0,
  _AOSSDASOD,
  0,
  [_Ena, _IUDE, _MUO],
  [2, 2, () => AwsOpenSearchServiceDomainMasterUserOptionsDetails]
);
export var AwsOpenSearchServiceDomainClusterConfigDetails = struct(
  n0,
  _AOSSDCCD,
  0,
  [_ICn, _WE, _WCa, _DMEe, _ZAC, _DMC, _ITn, _WT, _ZAE, _DMT],
  [1, 2, 1, 2, () => AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails, 1, 0, 0, 2, 0]
);
export var AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails = struct(n0, _AOSSDCCZACD, 0, [_AZC], [1]);
export var AwsOpenSearchServiceDomainDetails = struct(
  n0,
  _AOSSDD,
  0,
  [_Ar, _APc, _DNo, _I, _DE, _EV, _EARO, _NTNEO, _SSO, _CCl, _DEO, _VO, _LPO, _DEo, _ASO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails,
    () => AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails,
    () => AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails,
    () => AwsOpenSearchServiceDomainClusterConfigDetails,
    () => AwsOpenSearchServiceDomainDomainEndpointOptionsDetails,
    () => AwsOpenSearchServiceDomainVpcOptionsDetails,
    () => AwsOpenSearchServiceDomainLogPublishingOptionsDetails,
    128 | 0,
    () => AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails,
  ]
);
export var AwsOpenSearchServiceDomainDomainEndpointOptionsDetails = struct(
  n0,
  _AOSSDDEOD,
  0,
  [_CECA, _CEE, _EHTTPS, _CEu, _TLSSP],
  [0, 2, 2, 0, 0]
);
export var AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails = struct(n0, _AOSSDEAROD, 0, [_Ena, _KKI], [2, 0]);
export var AwsOpenSearchServiceDomainLogPublishingOption = struct(n0, _AOSSDLPO, 0, [_CWLLGA, _Ena], [0, 2]);
export var AwsOpenSearchServiceDomainLogPublishingOptionsDetails = struct(
  n0,
  _AOSSDLPOD,
  0,
  [_ISL, _SSL, _AL],
  [
    () => AwsOpenSearchServiceDomainLogPublishingOption,
    () => AwsOpenSearchServiceDomainLogPublishingOption,
    () => AwsOpenSearchServiceDomainLogPublishingOption,
  ]
);
export var AwsOpenSearchServiceDomainMasterUserOptionsDetails = struct(
  n0,
  _AOSSDMUOD,
  0,
  [_MUA, _MUN, _MUP],
  [0, 0, 0]
);
export var AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails = struct(n0, _AOSSDNTNEOD, 0, [_Ena], [2]);
export var AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails = struct(
  n0,
  _AOSSDSSOD,
  0,
  [_AUD, _Can, _CV, _D, _NV, _UAp, _US, _OD],
  [0, 2, 0, 0, 0, 2, 0, 2]
);
export var AwsOpenSearchServiceDomainVpcOptionsDetails = struct(n0, _AOSSDVOD, 0, [_SGI, _SIub], [64 | 0, 64 | 0]);
export var AwsRdsDbClusterAssociatedRole = struct(n0, _ARDCAR, 0, [_RAo, _St], [0, 0]);
export var AwsRdsDbClusterDetails = struct(
  n0,
  _ARDCD,
  0,
  [
    _ASl,
    _AZv,
    _BRP,
    _DNa,
    _St,
    _End,
    _REe,
    _CEus,
    _MAul,
    _Eng,
    _EV,
    _P,
    _MU,
    _PBW,
    _PMW,
    _RRI,
    _VSG,
    _HZI,
    _SEto,
    _KKI,
    _DCRI,
    _ARs,
    _CCT,
    _ECWLE,
    _EMn,
    _DPe,
    _HEE,
    _ASS,
    _CTTS,
    _CAC,
    _DMo,
    _DCPG,
    _DSG,
    _DCOGM,
    _DCI,
    _DCM,
    _IDAE,
    _AMVU,
  ],
  [
    1,
    64 | 0,
    1,
    0,
    0,
    0,
    0,
    64 | 0,
    2,
    0,
    0,
    1,
    0,
    0,
    0,
    64 | 0,
    () => AwsRdsDbInstanceVpcSecurityGroups,
    0,
    2,
    0,
    0,
    () => AwsRdsDbClusterAssociatedRoles,
    0,
    64 | 0,
    0,
    2,
    2,
    0,
    2,
    2,
    () => AwsRdsDbDomainMemberships,
    0,
    0,
    () => AwsRdsDbClusterOptionGroupMemberships,
    0,
    () => AwsRdsDbClusterMembers,
    2,
    2,
  ]
);
export var AwsRdsDbClusterMember = struct(n0, _ARDCM, 0, [_ICW, _PTrom, _DII, _DCPGS], [2, 1, 0, 0]);
export var AwsRdsDbClusterOptionGroupMembership = struct(n0, _ARDCOGM, 0, [_DCOGN, _St], [0, 0]);
export var AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute = struct(n0, _ARDCSDCSA, 0, [_ANt, _AVt], [0, 64 | 0]);
export var AwsRdsDbClusterSnapshotDetails = struct(
  n0,
  _ARDCSD,
  0,
  [_AZv, _SCT, _Eng, _ASl, _St, _P, _VIp, _CCT, _MU, _EV, _LMi, _STn, _PP, _SEto, _KKI, _DCI, _DCSI, _IDAE, _DCSA],
  [64 | 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, () => AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes]
);
export var AwsRdsDbDomainMembership = struct(n0, _ARDDM, 0, [_Do, _St, _Fq, _IRN], [0, 0, 0, 0]);
export var AwsRdsDbInstanceAssociatedRole = struct(n0, _ARDIAR, 0, [_RAo, _FNe, _St], [0, 0, 0]);
export var AwsRdsDbInstanceDetails = struct(
  n0,
  _ARDID,
  0,
  [
    _ARs,
    _CACI,
    _DBCI,
    _DBII,
    _DBIC,
    _DIP,
    _DRI,
    _DBN,
    _DPe,
    _End,
    _Eng,
    _EV,
    _IAMDAE,
    _ICT,
    _KKI,
    _PAu,
    _SEto,
    _TCA,
    _VSG,
    _MAul,
    _EMRA,
    _DIS,
    _MU,
    _ASl,
    _PBW,
    _BRP,
    _DSGb,
    _DPG,
    _AZ,
    _DSG,
    _PMW,
    _PMV,
    _LRTa,
    _AMVU,
    _RRSDBII,
    _RRDBII,
    _RRDBCI,
    _LMi,
    _Io,
    _OGM,
    _CSN,
    _SAZ,
    _SItat,
    _ST,
    _DMo,
    _CTTS,
    _MIo,
    _MRA,
    _PTrom,
    _Time,
    _PIE,
    _PIKKI,
    _PIRP,
    _ECWLE,
    _PF,
    _LE,
    _MAS,
  ],
  [
    () => AwsRdsDbInstanceAssociatedRoles,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    2,
    () => AwsRdsDbInstanceEndpoint,
    0,
    0,
    2,
    0,
    0,
    2,
    2,
    0,
    () => AwsRdsDbInstanceVpcSecurityGroups,
    2,
    0,
    0,
    0,
    1,
    0,
    1,
    64 | 0,
    () => AwsRdsDbParameterGroups,
    0,
    () => AwsRdsDbSubnetGroup,
    0,
    () => AwsRdsDbPendingModifiedValues,
    0,
    2,
    0,
    64 | 0,
    64 | 0,
    0,
    1,
    () => AwsRdsDbOptionGroupMemberships,
    0,
    0,
    () => AwsRdsDbStatusInfos,
    0,
    () => AwsRdsDbDomainMemberships,
    2,
    1,
    0,
    1,
    0,
    2,
    0,
    1,
    64 | 0,
    () => AwsRdsDbProcessorFeatures,
    () => AwsRdsDbInstanceEndpoint,
    1,
  ]
);
export var AwsRdsDbInstanceEndpoint = struct(n0, _ARDIE, 0, [_Addr, _P, _HZI], [0, 1, 0]);
export var AwsRdsDbInstanceVpcSecurityGroup = struct(n0, _ARDIVSG, 0, [_VSGI, _St], [0, 0]);
export var AwsRdsDbOptionGroupMembership = struct(n0, _ARDOGM, 0, [_OGN, _St], [0, 0]);
export var AwsRdsDbParameterGroup = struct(n0, _ARDPG, 0, [_DPGN, _PAS], [0, 0]);
export var AwsRdsDbPendingModifiedValues = struct(
  n0,
  _ARDPMV,
  0,
  [_DIC, _ASl, _MUP, _P, _BRP, _MAZ, _EV, _LMi, _Io, _DII, _ST, _CCIa, _DSGN, _PCWLE, _PF],
  [0, 1, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, () => AwsRdsPendingCloudWatchLogsExports, () => AwsRdsDbProcessorFeatures]
);
export var AwsRdsDbProcessorFeature = struct(n0, _ARDPF, 0, [_N, _Val], [0, 0]);
export var AwsRdsDbSecurityGroupDetails = struct(
  n0,
  _ARDSGD,
  0,
  [_DSGA, _DSGD, _DSGNb, _ESG, _IRp, _OIw, _VIp],
  [0, 0, 0, () => AwsRdsDbSecurityGroupEc2SecurityGroups, () => AwsRdsDbSecurityGroupIpRanges, 0, 0]
);
export var AwsRdsDbSecurityGroupEc2SecurityGroup = struct(n0, _ARDSGESG, 0, [_ESGI, _ESGN, _ESGOI, _St], [0, 0, 0, 0]);
export var AwsRdsDbSecurityGroupIpRange = struct(n0, _ARDSGIR, 0, [_CIi, _St], [0, 0]);
export var AwsRdsDbSnapshotDetails = struct(
  n0,
  _ARDSD,
  0,
  [
    _DSI,
    _DII,
    _SCT,
    _Eng,
    _ASl,
    _St,
    _P,
    _AZ,
    _VIp,
    _ICT,
    _MU,
    _EV,
    _LMi,
    _STn,
    _Io,
    _OGN,
    _PP,
    _SRo,
    _SDSI,
    _ST,
    _TCA,
    _En,
    _KKI,
    _Time,
    _IDAE,
    _PF,
    _DRI,
  ],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, () => AwsRdsDbProcessorFeatures, 0]
);
export var AwsRdsDbStatusInfo = struct(n0, _ARDSI, 0, [_STta, _Nor, _St, _M], [0, 2, 0, 0]);
export var AwsRdsDbSubnetGroup = struct(
  n0,
  _ARDSG,
  0,
  [_DSGN, _DSGDb, _VIp, _SGSu, _Sub, _DSGAb],
  [0, 0, 0, 0, () => AwsRdsDbSubnetGroupSubnets, 0]
);
export var AwsRdsDbSubnetGroupSubnet = struct(
  n0,
  _ARDSGS,
  0,
  [_SIubn, _SAZu, _SSu],
  [0, () => AwsRdsDbSubnetGroupSubnetAvailabilityZone, 0]
);
export var AwsRdsDbSubnetGroupSubnetAvailabilityZone = struct(n0, _ARDSGSAZ, 0, [_N], [0]);
export var AwsRdsEventSubscriptionDetails = struct(
  n0,
  _ARESD,
  0,
  [_CSI, _CAI, _Ena, _ECL, _ESA, _STA, _SIL, _STo, _St, _SCTu],
  [0, 0, 2, 64 | 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var AwsRdsPendingCloudWatchLogsExports = struct(n0, _ARPCWLE, 0, [_LTTE, _LTTD], [64 | 0, 64 | 0]);
export var AwsRedshiftClusterClusterNode = struct(n0, _ARCCN, 0, [_NR, _PIA, _PIAu], [0, 0, 0]);
export var AwsRedshiftClusterClusterParameterGroup = struct(
  n0,
  _ARCCPG,
  0,
  [_CPSL, _PAS, _PGN],
  [() => AwsRedshiftClusterClusterParameterStatusList, 0, 0]
);
export var AwsRedshiftClusterClusterParameterStatus = struct(n0, _ARCCPS, 0, [_PNar, _PAS, _PAED], [0, 0, 0]);
export var AwsRedshiftClusterClusterSecurityGroup = struct(n0, _ARCCSG, 0, [_CSGN, _St], [0, 0]);
export var AwsRedshiftClusterClusterSnapshotCopyStatus = struct(
  n0,
  _ARCCSCS,
  0,
  [_DRe, _MSRP, _RPet, _SCGN],
  [0, 1, 1, 0]
);
export var AwsRedshiftClusterDeferredMaintenanceWindow = struct(n0, _ARCDMW, 0, [_DMET, _DMI, _DMST], [0, 0, 0]);
export var AwsRedshiftClusterDetails = struct(
  n0,
  _ARCD,
  0,
  [
    _AVU,
    _ASRP,
    _AZ,
    _CAS,
    _CCT,
    _CIlu,
    _CNlu,
    _CPG,
    _CPK,
    _CRN,
    _CSG,
    _CSCS,
    _CSlu,
    _CSGNl,
    _CVl,
    _DBN,
    _DMW,
    _EIS,
    _ERNONO,
    _En,
    _End,
    _EVR,
    _ENSST,
    _ENSSTS,
    _HS,
    _IRa,
    _KKI,
    _MTN,
    _MSRP,
    _MU,
    _NMWST,
    _NTo,
    _NON,
    _PAe,
    _PMV,
    _PMW,
    _PAu,
    _RIes,
    _RSest,
    _SSI,
    _SSS,
    _VIp,
    _VSG,
    _LSog,
  ],
  [
    2,
    1,
    0,
    0,
    0,
    0,
    () => AwsRedshiftClusterClusterNodes,
    () => AwsRedshiftClusterClusterParameterGroups,
    0,
    0,
    () => AwsRedshiftClusterClusterSecurityGroups,
    () => AwsRedshiftClusterClusterSnapshotCopyStatus,
    0,
    0,
    0,
    0,
    () => AwsRedshiftClusterDeferredMaintenanceWindows,
    () => AwsRedshiftClusterElasticIpStatus,
    0,
    2,
    () => AwsRedshiftClusterEndpoint,
    2,
    0,
    0,
    () => AwsRedshiftClusterHsmStatus,
    () => AwsRedshiftClusterIamRoles,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    64 | 0,
    () => AwsRedshiftClusterPendingModifiedValues,
    0,
    2,
    () => AwsRedshiftClusterResizeInfo,
    () => AwsRedshiftClusterRestoreStatus,
    0,
    0,
    0,
    () => AwsRedshiftClusterVpcSecurityGroups,
    () => AwsRedshiftClusterLoggingStatus,
  ]
);
export var AwsRedshiftClusterElasticIpStatus = struct(n0, _ARCEIS, 0, [_EIl, _St], [0, 0]);
export var AwsRedshiftClusterEndpoint = struct(n0, _ARCE, 0, [_Addr, _P], [0, 1]);
export var AwsRedshiftClusterHsmStatus = struct(n0, _ARCHS, 0, [_HCCI, _HCI, _St], [0, 0, 0]);
export var AwsRedshiftClusterIamRole = struct(n0, _ARCIR, 0, [_ASp, _IRA], [0, 0]);
export var AwsRedshiftClusterLoggingStatus = struct(
  n0,
  _ARCLS,
  0,
  [_BNu, _LFM, _LFT, _LSDT, _LEo, _SKP],
  [0, 0, 0, 0, 2, 0]
);
export var AwsRedshiftClusterPendingModifiedValues = struct(
  n0,
  _ARCPMV,
  0,
  [_ASRP, _CIlu, _CTlu, _CVl, _ETnc, _EVR, _MTN, _MUP, _NTo, _NON, _PAu],
  [1, 0, 0, 0, 0, 2, 0, 0, 0, 1, 2]
);
export var AwsRedshiftClusterResizeInfo = struct(n0, _ARCRI, 0, [_ACR, _RTes], [2, 0]);
export var AwsRedshiftClusterRestoreStatus = struct(
  n0,
  _ARCRS,
  0,
  [_CRRIMBPS, _ETIS, _ETTCIS, _PIMB, _SSIMB, _St],
  [1, 1, 1, 1, 1, 0]
);
export var AwsRedshiftClusterVpcSecurityGroup = struct(n0, _ARCVSG, 0, [_St, _VSGI], [0, 0]);
export var AwsRoute53HostedZoneConfigDetails = struct(n0, _ARHZCD, 0, [_Com], [0]);
export var AwsRoute53HostedZoneDetails = struct(
  n0,
  _ARHZD,
  0,
  [_HZ, _Vp, _NS, _QLC],
  [
    () => AwsRoute53HostedZoneObjectDetails,
    () => AwsRoute53HostedZoneVpcsList,
    64 | 0,
    () => AwsRoute53QueryLoggingConfigDetails,
  ]
);
export var AwsRoute53HostedZoneObjectDetails = struct(
  n0,
  _ARHZOD,
  0,
  [_I, _N, _Config],
  [0, 0, () => AwsRoute53HostedZoneConfigDetails]
);
export var AwsRoute53HostedZoneVpcDetails = struct(n0, _ARHZVD, 0, [_I, _Reg], [0, 0]);
export var AwsRoute53QueryLoggingConfigDetails = struct(
  n0,
  _ARQLCD,
  0,
  [_CWLLGA],
  [() => CloudWatchLogsLogGroupArnConfigDetails]
);
export var AwsS3AccessPointDetails = struct(
  n0,
  _ASAPD,
  0,
  [_APA, _Al, _B, _BAI, _N, _NO, _PABC, _VCpc],
  [0, 0, 0, 0, 0, 0, () => AwsS3AccountPublicAccessBlockDetails, () => AwsS3AccessPointVpcConfigurationDetails]
);
export var AwsS3AccessPointVpcConfigurationDetails = struct(n0, _ASAPVCD, 0, [_VIp], [0]);
export var AwsS3AccountPublicAccessBlockDetails = struct(n0, _ASAPABD, 0, [_BPAl, _BPP, _IPAg, _RPB], [2, 2, 2, 2]);
export var AwsS3BucketBucketLifecycleConfigurationDetails = struct(
  n0,
  _ASBBLCD,
  0,
  [_Rul],
  [() => AwsS3BucketBucketLifecycleConfigurationRulesList]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails = struct(
  n0,
  _ASBBLCRAIMUD,
  0,
  [_DAI],
  [1]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesDetails = struct(
  n0,
  _ASBBLCRD,
  0,
  [_AIMU, _EDx, _EID, _EODM, _Fil, _ID_, _NVEID, _NVT, _Pr, _St, _Tr],
  [
    () => AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails,
    0,
    1,
    2,
    () => AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails,
    0,
    1,
    () => AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList,
    0,
    0,
    () => AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList,
  ]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails = struct(
  n0,
  _ASBBLCRFD,
  0,
  [_Pre],
  [() => AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails = struct(
  n0,
  _ASBBLCRFPD,
  0,
  [_Ope, _Pr, _Tag, _T],
  [
    () => AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList,
    0,
    () => AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails,
    0,
  ]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails = struct(
  n0,
  _ASBBLCRFPOD,
  0,
  [_Pr, _Tag, _T],
  [0, () => AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails, 0]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails = struct(
  n0,
  _ASBBLCRFPOTD,
  0,
  [_K, _Val],
  [0, 0]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails = struct(
  n0,
  _ASBBLCRFPTD,
  0,
  [_K, _Val],
  [0, 0]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails = struct(
  n0,
  _ASBBLCRNVTD,
  0,
  [_Da, _SC],
  [1, 0]
);
export var AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails = struct(
  n0,
  _ASBBLCRTD,
  0,
  [_Dat, _Da, _SC],
  [0, 1, 0]
);
export var AwsS3BucketBucketVersioningConfiguration = struct(n0, _ASBBVC, 0, [_IMDE, _St], [2, 0]);
export var AwsS3BucketDetails = struct(
  n0,
  _ASBD,
  0,
  [_OIw, _ONw, _OAIw, _CA, _SSEC, _BLC, _PABC, _ACL, _BLCu, _BWC, _BNC, _BVC, _OLC, _N],
  [
    0,
    0,
    0,
    0,
    () => AwsS3BucketServerSideEncryptionConfiguration,
    () => AwsS3BucketBucketLifecycleConfigurationDetails,
    () => AwsS3AccountPublicAccessBlockDetails,
    0,
    () => AwsS3BucketLoggingConfiguration,
    () => AwsS3BucketWebsiteConfiguration,
    () => AwsS3BucketNotificationConfiguration,
    () => AwsS3BucketBucketVersioningConfiguration,
    () => AwsS3BucketObjectLockConfiguration,
    0,
  ]
);
export var AwsS3BucketLoggingConfiguration = struct(n0, _ASBLC, 0, [_DBNe, _LFP], [0, 0]);
export var AwsS3BucketNotificationConfiguration = struct(
  n0,
  _ASBNC,
  0,
  [_Configu],
  [() => AwsS3BucketNotificationConfigurationDetails]
);
export var AwsS3BucketNotificationConfigurationDetail = struct(
  n0,
  _ASBNCD,
  0,
  [_Ev, _Fil, _Des, _T],
  [64 | 0, () => AwsS3BucketNotificationConfigurationFilter, 0, 0]
);
export var AwsS3BucketNotificationConfigurationFilter = struct(
  n0,
  _ASBNCF,
  0,
  [_SKF],
  [() => AwsS3BucketNotificationConfigurationS3KeyFilter]
);
export var AwsS3BucketNotificationConfigurationS3KeyFilter = struct(
  n0,
  _ASBNCSKF,
  0,
  [_FRi],
  [() => AwsS3BucketNotificationConfigurationS3KeyFilterRules]
);
export var AwsS3BucketNotificationConfigurationS3KeyFilterRule = struct(n0, _ASBNCSKFR, 0, [_N, _Val], [0, 0]);
export var AwsS3BucketObjectLockConfiguration = struct(
  n0,
  _ASBOLC,
  0,
  [_OLE, _Rule],
  [0, () => AwsS3BucketObjectLockConfigurationRuleDetails]
);
export var AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails = struct(
  n0,
  _ASBOLCRDRD,
  0,
  [_Da, _Mod, _Y],
  [1, 0, 1]
);
export var AwsS3BucketObjectLockConfigurationRuleDetails = struct(
  n0,
  _ASBOLCRD,
  0,
  [_DRef],
  [() => AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails]
);
export var AwsS3BucketServerSideEncryptionByDefault = struct(n0, _ASBSSEBD, 0, [_SSEA, _KMSMKID], [0, 0]);
export var AwsS3BucketServerSideEncryptionConfiguration = struct(
  n0,
  _ASBSSEC,
  0,
  [_Rul],
  [() => AwsS3BucketServerSideEncryptionRules]
);
export var AwsS3BucketServerSideEncryptionRule = struct(
  n0,
  _ASBSSER,
  0,
  [_ASSEBD],
  [() => AwsS3BucketServerSideEncryptionByDefault]
);
export var AwsS3BucketWebsiteConfiguration = struct(
  n0,
  _ASBWC,
  0,
  [_EDr, _IDS, _RART, _RRo],
  [0, 0, () => AwsS3BucketWebsiteConfigurationRedirectTo, () => AwsS3BucketWebsiteConfigurationRoutingRules]
);
export var AwsS3BucketWebsiteConfigurationRedirectTo = struct(n0, _ASBWCRT, 0, [_Ho, _Prot], [0, 0]);
export var AwsS3BucketWebsiteConfigurationRoutingRule = struct(
  n0,
  _ASBWCRR,
  0,
  [_Cond, _Red],
  [() => AwsS3BucketWebsiteConfigurationRoutingRuleCondition, () => AwsS3BucketWebsiteConfigurationRoutingRuleRedirect]
);
export var AwsS3BucketWebsiteConfigurationRoutingRuleCondition = struct(n0, _ASBWCRRC, 0, [_HECRE, _KPE], [0, 0]);
export var AwsS3BucketWebsiteConfigurationRoutingRuleRedirect = struct(
  n0,
  _ASBWCRRR,
  0,
  [_Ho, _HRC, _Prot, _RKPW, _RKW],
  [0, 0, 0, 0, 0]
);
export var AwsS3ObjectDetails = struct(n0, _ASOD, 0, [_LM, _ETa, _VI, _CTo, _SSE, _SSEKMSKI], [0, 0, 0, 0, 0, 0]);
export var AwsSageMakerNotebookInstanceDetails = struct(
  n0,
  _ASMNID,
  0,
  [
    _ATcc,
    _ACRd,
    _DCR,
    _DIA,
    _FR,
    _IMSC,
    _ITn,
    _KKI,
    _NII,
    _NIA,
    _NILCN,
    _NIN,
    _NISo,
    _PIl,
    _RAo,
    _RAoo,
    _SG,
    _SIu,
    _Ur,
    _VSIGB,
  ],
  [
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    1,
  ]
);
export var AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails = struct(n0, _ASMNIMSCD, 0, [_MIMSV], [0]);
export var AwsSecretsManagerSecretDetails = struct(
  n0,
  _ASMSD,
  0,
  [_RRot, _ROWF, _KKI, _REo, _RLA, _Del, _N, _D],
  [() => AwsSecretsManagerSecretRotationRules, 2, 0, 2, 0, 2, 0, 0]
);
export var AwsSecretsManagerSecretRotationRules = struct(n0, _ASMSRR, 0, [_AAD], [1]);
export var AwsSecurityFinding = struct(
  n0,
  _ASF,
  0,
  [
    _SVc,
    _I,
    _PA,
    _PNr,
    _CN,
    _Reg,
    _GIe,
    _AAI,
    _Ty,
    _FOA,
    _LOA,
    _CA,
    _UA,
    _Se,
    _Con,
    _Cri,
    _Ti,
    _D,
    _Rem,
    _SU,
    _PFr,
    _UDF,
    _Mal,
    _Ne,
    _NP,
    _Proc,
    _Thre,
    _TII,
    _Res,
    _Comp,
    _VS,
    _WSo,
    _W,
    _RSe,
    _RF,
    _No,
    _Vu,
    _PSa,
    _A,
    _FPFi,
    _Sam,
    _GD,
    _PAr,
    _AAN,
    _Det,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    () => Severity,
    1,
    1,
    0,
    0,
    () => Remediation,
    0,
    128 | 0,
    128 | 0,
    () => MalwareList,
    () => Network,
    () => NetworkPathList,
    () => ProcessDetails,
    () => ThreatList,
    () => ThreatIntelIndicatorList,
    () => ResourceList,
    () => Compliance,
    0,
    0,
    () => Workflow,
    0,
    () => RelatedFindingList,
    () => Note,
    () => VulnerabilityList,
    () => PatchSummary,
    () => Action,
    () => FindingProviderFields,
    2,
    () => GeneratorDetails,
    0,
    0,
    () => Detection,
  ]
);
export var AwsSnsTopicDetails = struct(
  n0,
  _ASTD,
  0,
  [_KMKI, _Subs, _TNo, _Ow, _SSFRA, _SFFRA, _ASFRA, _FSFRA, _FFFRA, _HSFRA, _HFFRA],
  [0, () => AwsSnsTopicSubscriptionList, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var AwsSnsTopicSubscription = struct(n0, _ASTS, 0, [_End, _Prot], [0, 0]);
export var AwsSqsQueueDetails = struct(n0, _ASQD, 0, [_KDKRPS, _KMKI, _QN, _DLTA], [1, 0, 0, 0]);
export var AwsSsmComplianceSummary = struct(
  n0,
  _ASCS,
  0,
  [_St, _CCC, _CHC, _CMC, _ETxe, _NCCC, _CIC, _NCIC, _CUC, _NCLC, _NCHC, _CLC, _CTom, _PBI, _OSv, _NCMC, _NCUC, _PG],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0]
);
export var AwsSsmPatch = struct(n0, _ASP, 0, [_CSom], [() => AwsSsmComplianceSummary]);
export var AwsSsmPatchComplianceDetails = struct(n0, _ASPCD, 0, [_Patc], [() => AwsSsmPatch]);
export var AwsStepFunctionStateMachineDetails = struct(
  n0,
  _ASFSMD,
  0,
  [_Lab, _LCogg, _N, _RAo, _SMA, _St, _TCr, _T],
  [
    0,
    () => AwsStepFunctionStateMachineLoggingConfigurationDetails,
    0,
    0,
    0,
    0,
    () => AwsStepFunctionStateMachineTracingConfigurationDetails,
    0,
  ]
);
export var AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails = struct(
  n0,
  _ASFSMLCDCWLLGD,
  0,
  [_LGA],
  [0]
);
export var AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails = struct(
  n0,
  _ASFSMLCDD,
  0,
  [_CWLLG],
  [() => AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails]
);
export var AwsStepFunctionStateMachineLoggingConfigurationDetails = struct(
  n0,
  _ASFSMLCD,
  0,
  [_Dest, _IED, _Le],
  [() => AwsStepFunctionStateMachineLoggingConfigurationDestinationsList, 2, 0]
);
export var AwsStepFunctionStateMachineTracingConfigurationDetails = struct(n0, _ASFSMTCD, 0, [_Ena], [2]);
export var AwsWafRateBasedRuleDetails = struct(
  n0,
  _AWRBRD,
  0,
  [_MN, _N, _RK, _RL, _RIu, _MPat],
  [0, 0, 0, 1, 0, () => AwsWafRateBasedRuleMatchPredicateList]
);
export var AwsWafRateBasedRuleMatchPredicate = struct(n0, _AWRBRMP, 0, [_DIa, _Neg, _T], [0, 2, 0]);
export var AwsWafRegionalRateBasedRuleDetails = struct(
  n0,
  _AWRRBRD,
  0,
  [_MN, _N, _RK, _RL, _RIu, _MPat],
  [0, 0, 0, 1, 0, () => AwsWafRegionalRateBasedRuleMatchPredicateList]
);
export var AwsWafRegionalRateBasedRuleMatchPredicate = struct(n0, _AWRRBRMP, 0, [_DIa, _Neg, _T], [0, 2, 0]);
export var AwsWafRegionalRuleDetails = struct(
  n0,
  _AWRRD,
  0,
  [_MN, _N, _PL, _RIu],
  [0, 0, () => AwsWafRegionalRulePredicateList, 0]
);
export var AwsWafRegionalRuleGroupDetails = struct(
  n0,
  _AWRRGD,
  0,
  [_MN, _N, _RGI, _Rul],
  [0, 0, 0, () => AwsWafRegionalRuleGroupRulesList]
);
export var AwsWafRegionalRuleGroupRulesActionDetails = struct(n0, _AWRRGRAD, 0, [_T], [0]);
export var AwsWafRegionalRuleGroupRulesDetails = struct(
  n0,
  _AWRRGRD,
  0,
  [_A, _Prio, _RIu, _T],
  [() => AwsWafRegionalRuleGroupRulesActionDetails, 1, 0, 0]
);
export var AwsWafRegionalRulePredicateListDetails = struct(n0, _AWRRPLD, 0, [_DIa, _Neg, _T], [0, 2, 0]);
export var AwsWafRegionalWebAclDetails = struct(
  n0,
  _AWRWAD,
  0,
  [_DAe, _MN, _N, _RLu, _WAI],
  [0, 0, 0, () => AwsWafRegionalWebAclRulesList, 0]
);
export var AwsWafRegionalWebAclRulesListActionDetails = struct(n0, _AWRWARLAD, 0, [_T], [0]);
export var AwsWafRegionalWebAclRulesListDetails = struct(
  n0,
  _AWRWARLD,
  0,
  [_A, _OAv, _Prio, _RIu, _T],
  [() => AwsWafRegionalWebAclRulesListActionDetails, () => AwsWafRegionalWebAclRulesListOverrideActionDetails, 1, 0, 0]
);
export var AwsWafRegionalWebAclRulesListOverrideActionDetails = struct(n0, _AWRWARLOAD, 0, [_T], [0]);
export var AwsWafRuleDetails = struct(n0, _AWRD, 0, [_MN, _N, _PL, _RIu], [0, 0, () => AwsWafRulePredicateList, 0]);
export var AwsWafRuleGroupDetails = struct(
  n0,
  _AWRGD,
  0,
  [_MN, _N, _RGI, _Rul],
  [0, 0, 0, () => AwsWafRuleGroupRulesList]
);
export var AwsWafRuleGroupRulesActionDetails = struct(n0, _AWRGRAD, 0, [_T], [0]);
export var AwsWafRuleGroupRulesDetails = struct(
  n0,
  _AWRGRD,
  0,
  [_A, _Prio, _RIu, _T],
  [() => AwsWafRuleGroupRulesActionDetails, 1, 0, 0]
);
export var AwsWafRulePredicateListDetails = struct(n0, _AWRPLD, 0, [_DIa, _Neg, _T], [0, 2, 0]);
export var AwsWafv2ActionAllowDetails = struct(n0, _AWAAD, 0, [_CRH], [() => AwsWafv2CustomRequestHandlingDetails]);
export var AwsWafv2ActionBlockDetails = struct(n0, _AWABD, 0, [_CRu], [() => AwsWafv2CustomResponseDetails]);
export var AwsWafv2CustomHttpHeader = struct(n0, _AWCHH, 0, [_N, _Val], [0, 0]);
export var AwsWafv2CustomRequestHandlingDetails = struct(n0, _AWCRHD, 0, [_IH], [() => AwsWafv2InsertHeadersList]);
export var AwsWafv2CustomResponseDetails = struct(
  n0,
  _AWCRD,
  0,
  [_CRBK, _RCes, _RH],
  [0, 1, () => AwsWafv2InsertHeadersList]
);
export var AwsWafv2RuleGroupDetails = struct(
  n0,
  _AWRGDw,
  0,
  [_Cap, _D, _I, _N, _Ar, _Rul, _Sc, _VCi],
  [1, 0, 0, 0, 0, () => AwsWafv2RulesList, 0, () => AwsWafv2VisibilityConfigDetails]
);
export var AwsWafv2RulesActionCaptchaDetails = struct(
  n0,
  _AWRACD,
  0,
  [_CRH],
  [() => AwsWafv2CustomRequestHandlingDetails]
);
export var AwsWafv2RulesActionCountDetails = struct(
  n0,
  _AWRACDw,
  0,
  [_CRH],
  [() => AwsWafv2CustomRequestHandlingDetails]
);
export var AwsWafv2RulesActionDetails = struct(
  n0,
  _AWRAD,
  0,
  [_All, _Bl, _Capt, _Cou],
  [
    () => AwsWafv2ActionAllowDetails,
    () => AwsWafv2ActionBlockDetails,
    () => AwsWafv2RulesActionCaptchaDetails,
    () => AwsWafv2RulesActionCountDetails,
  ]
);
export var AwsWafv2RulesDetails = struct(
  n0,
  _AWRDw,
  0,
  [_A, _N, _OAv, _Prio, _VCi],
  [() => AwsWafv2RulesActionDetails, 0, 0, 1, () => AwsWafv2VisibilityConfigDetails]
);
export var AwsWafv2VisibilityConfigDetails = struct(n0, _AWVCD, 0, [_CWME, _MN, _SRE], [2, 0, 2]);
export var AwsWafv2WebAclActionDetails = struct(
  n0,
  _AWWAAD,
  0,
  [_All, _Bl],
  [() => AwsWafv2ActionAllowDetails, () => AwsWafv2ActionBlockDetails]
);
export var AwsWafv2WebAclCaptchaConfigDetails = struct(
  n0,
  _AWWACCD,
  0,
  [_ITP],
  [() => AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails]
);
export var AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails = struct(n0, _AWWACCITPD, 0, [_ITmm], [1]);
export var AwsWafv2WebAclDetails = struct(
  n0,
  _AWWAD,
  0,
  [_N, _Ar, _MFM, _I, _Cap, _CCa, _DAe, _D, _Rul, _VCi],
  [
    0,
    0,
    2,
    0,
    1,
    () => AwsWafv2WebAclCaptchaConfigDetails,
    () => AwsWafv2WebAclActionDetails,
    0,
    () => AwsWafv2RulesList,
    () => AwsWafv2VisibilityConfigDetails,
  ]
);
export var AwsWafWebAclDetails = struct(n0, _AWWADw, 0, [_N, _DAe, _Rul, _WAI], [0, 0, () => AwsWafWebAclRuleList, 0]);
export var AwsWafWebAclRule = struct(
  n0,
  _AWWAR,
  0,
  [_A, _ER, _OAv, _Prio, _RIu, _T],
  [() => WafAction, () => WafExcludedRuleList, () => WafOverrideAction, 1, 0, 0]
);
export var AwsXrayEncryptionConfigDetails = struct(n0, _AXECD, 0, [_KIe, _St, _T], [0, 0, 0]);
export var BatchGetSecurityControlsRequest = struct(n0, _BGSCR, 0, [_SCIe], [64 | 0]);
export var BatchGetSecurityControlsResponse = struct(
  n0,
  _BGSCRa,
  0,
  [_SCec, _UIn],
  [() => SecurityControls, () => UnprocessedSecurityControls]
);
export var BatchImportFindingsRequest = struct(n0, _BIFR, 0, [_Fin], [() => BatchImportFindingsRequestFindingList]);
export var BatchImportFindingsResponse = struct(
  n0,
  _BIFRa,
  0,
  [_FCai, _SCu, _FF],
  [1, 1, () => ImportFindingsErrorList]
);
export var BooleanConfigurationOptions = struct(n0, _BCO, 0, [_DVe], [2]);
export var Cell = struct(n0, _Cel, 0, [_Col, _Row, _CNol, _CRe], [1, 1, 0, 0]);
export var CidrBlockAssociation = struct(n0, _CBA, 0, [_AIs, _CBi, _CBSi], [0, 0, 0]);
export var City = struct(n0, _Ci, 0, [_CNi], [0]);
export var ClassificationResult = struct(
  n0,
  _CRl,
  0,
  [_MTi, _SCi, _AOd, _St, _SDe, _CDI],
  [0, 1, 2, () => ClassificationStatus, () => SensitiveDataResultList, () => CustomDataIdentifiersResult]
);
export var ClassificationStatus = struct(n0, _CSla, 0, [_C, _R], [0, 0]);
export var CloudWatchLogsLogGroupArnConfigDetails = struct(n0, _CWLLGACD, 0, [_CWLLGA, _HZI, _I], [0, 0, 0]);
export var CodeRepositoryDetails = struct(n0, _CRD, 0, [_PTrov, _PNroj, _CSIA], [0, 0, 0]);
export var CodeVulnerabilitiesFilePath = struct(n0, _CVFP, 0, [_ELn, _FNil, _FPil, _SLt], [1, 0, 0, 1]);
export var Compliance = struct(
  n0,
  _Comp,
  0,
  [_St, _RRel, _SRta, _SCIec, _ASssoci, _SCPe],
  [0, 64 | 0, () => StatusReasonsList, 0, () => AssociatedStandardsList, () => SecurityControlParametersList]
);
export var ContainerDetails = struct(
  n0,
  _CDont,
  0,
  [_CRon, _N, _IIm, _INm, _LA, _VMo, _Priv],
  [0, 0, 0, 0, 0, () => VolumeMountList, 2]
);
export var Country = struct(n0, _Co, 0, [_CCou, _CNou], [0, 0]);
export var CustomDataIdentifiersDetections = struct(n0, _CDID, 0, [_Cou, _Ar, _N, _Oc], [1, 0, 0, () => Occurrences]);
export var CustomDataIdentifiersResult = struct(
  n0,
  _CDIR,
  0,
  [_Dete, _TCo],
  [() => CustomDataIdentifiersDetectionsList, 1]
);
export var Cvss = struct(n0, _Cv, 0, [_V, _BS, _BV, _So, _Adj], [0, 1, 0, 0, () => AdjustmentList]);
export var DataClassificationDetails = struct(n0, _DCD, 0, [_DRL, _Resu], [0, () => ClassificationResult]);
export var Detection = struct(n0, _Det, 0, [_Seq], [() => Sequence]);
export var DnsRequestAction = struct(n0, _DRA, 0, [_Do, _Prot, _Blo], [0, 0, 2]);
export var DoubleConfigurationOptions = struct(n0, _DCO, 0, [_DVe, _Mi, _Max], [1, 1, 1]);
export var EnumConfigurationOptions = struct(n0, _ECO, 0, [_DVe, _AVl], [0, 64 | 0]);
export var EnumListConfigurationOptions = struct(n0, _ELCO, 0, [_DVe, _MIa, _AVl], [64 | 0, 1, 64 | 0]);
export var FilePaths = struct(n0, _FPile, 0, [_FPil, _FNil, _RI, _Has], [0, 0, 0, 0]);
export var FindingProviderFields = struct(
  n0,
  _FPFi,
  0,
  [_Con, _Cri, _RF, _Se, _Ty],
  [1, 1, () => RelatedFindingList, () => FindingProviderSeverity, 64 | 0]
);
export var FindingProviderSeverity = struct(n0, _FPS, 0, [_Lab, _Orig], [0, 0]);
export var FirewallPolicyDetails = struct(
  n0,
  _FPD,
  0,
  [_SRGR, _SCAt, _SDA, _SFDA, _SRGRt],
  [
    () => FirewallPolicyStatefulRuleGroupReferencesList,
    () => FirewallPolicyStatelessCustomActionsList,
    64 | 0,
    64 | 0,
    () => FirewallPolicyStatelessRuleGroupReferencesList,
  ]
);
export var FirewallPolicyStatefulRuleGroupReferencesDetails = struct(n0, _FPSRGRD, 0, [_RAe], [0]);
export var FirewallPolicyStatelessCustomActionsDetails = struct(
  n0,
  _FPSCAD,
  0,
  [_ADct, _ANct],
  [() => StatelessCustomActionDefinition, 0]
);
export var FirewallPolicyStatelessRuleGroupReferencesDetails = struct(n0, _FPSRGRDi, 0, [_Prio, _RAe], [1, 0]);
export var GeneratorDetails = struct(n0, _GD, 0, [_N, _D, _La], [0, 0, 64 | 0]);
export var GeoLocation = struct(n0, _GL, 0, [_Lon, _Lat], [1, 1]);
export var GetConfigurationPolicyRequest = struct(n0, _GCPR, 0, [_Id], [[0, 1]]);
export var GetConfigurationPolicyResponse = struct(
  n0,
  _GCPRe,
  0,
  [_Ar, _I, _N, _D, _UA, _CA, _CPonf],
  [0, 0, 0, 0, 5, 5, () => Policy]
);
export var GetSecurityControlDefinitionRequest = struct(
  n0,
  _GSCDR,
  0,
  [_SCIec],
  [
    [
      0,
      {
        [_hQ]: _SCIec,
      },
    ],
  ]
);
export var GetSecurityControlDefinitionResponse = struct(n0, _GSCDRe, 0, [_SCD], [() => SecurityControlDefinition]);
export var IcmpTypeCode = struct(n0, _ITC, 0, [_C, _T], [1, 1]);
export var ImportFindingsError = struct(n0, _IFE, 0, [_I, _ECr, _EMr], [0, 0, 0]);
export var Indicator = struct(n0, _Ind, 0, [_K, _Valu, _Ti, _T], [0, 64 | 0, 0, 0]);
export var IntegerConfigurationOptions = struct(n0, _ICO, 0, [_DVe, _Mi, _Max], [1, 1, 1]);
export var IntegerListConfigurationOptions = struct(n0, _ILCO, 0, [_DVe, _Mi, _Max, _MIa], [64 | 1, 1, 1, 1]);
export var IpOrganizationDetails = struct(n0, _IOD, 0, [_Asn, _AOs, _Isp, _Org], [1, 0, 0, 0]);
export var Ipv6CidrBlockAssociation = struct(n0, _ICBA, 0, [_AIs, _ICB, _CBSi], [0, 0, 0]);
export var ListSecurityControlDefinitionsRequest = struct(
  n0,
  _LSCDR,
  0,
  [_SAta, _NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _SAta,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var ListSecurityControlDefinitionsResponse = struct(
  n0,
  _LSCDRi,
  0,
  [_SCDe, _NTe],
  [() => SecurityControlDefinitions, 0]
);
export var LoadBalancerState = struct(n0, _LBS, 0, [_C, _R], [0, 0]);
export var Malware = struct(n0, _Mal, 0, [_N, _T, _Pat, _Sta], [0, 0, 0, 0]);
export var Network = struct(
  n0,
  _Ne,
  0,
  [_Dir, _Prot, _OPR, _SIV, _SIVo, _SPou, _SDo, _SMo, _DIV, _DIVe, _DPes, _DDe],
  [0, 0, () => PortRange, 0, 0, 1, 0, 0, 0, 0, 1, 0]
);
export var NetworkAutonomousSystem = struct(n0, _NAS, 0, [_N, _Nu], [0, 1]);
export var NetworkConnection = struct(n0, _NCe, 0, [_Dir], [0]);
export var NetworkConnectionAction = struct(
  n0,
  _NCA,
  0,
  [_CDonne, _RID, _RPD, _LPD, _Prot, _Blo],
  [0, () => ActionRemoteIpDetails, () => ActionRemotePortDetails, () => ActionLocalPortDetails, 0, 2]
);
export var NetworkEndpoint = struct(
  n0,
  _NE,
  0,
  [_I, _Ip, _Do, _P, _Loc, _ASuto, _Conne],
  [0, 0, 0, 1, () => NetworkGeoLocation, () => NetworkAutonomousSystem, () => NetworkConnection]
);
export var NetworkGeoLocation = struct(n0, _NGL, 0, [_Ci, _Co, _Lat, _Lon], [0, 0, 1, 1]);
export var NetworkHeader = struct(
  n0,
  _NH,
  0,
  [_Prot, _Des, _So],
  [0, () => NetworkPathComponentDetails, () => NetworkPathComponentDetails]
);
export var NetworkPathComponent = struct(
  n0,
  _NPC,
  0,
  [_CIom, _CTomp, _Eg, _Ing],
  [0, 0, () => NetworkHeader, () => NetworkHeader]
);
export var NetworkPathComponentDetails = struct(n0, _NPCD, 0, [_Addr, _PRo], [64 | 0, () => PortRangeList]);
export var Note = struct(n0, _No, 0, [_Tex, _UBp, _UA], [0, 0, 0]);
export var Occurrences = struct(
  n0,
  _Oc,
  0,
  [_LRi, _OR, _Pag, _Rec, _Cell],
  [() => Ranges, () => Ranges, () => Pages, () => Records, () => Cells]
);
export var Page = struct(n0, _Page, 0, [_PNag, _LRin, _ORf], [1, () => Range, () => Range]);
export var ParameterConfiguration = struct(n0, _PCa, 0, [_VTa, _Val], [0, () => ParameterValue]);
export var ParameterDefinition = struct(n0, _PDa, 0, [_D, _COon], [0, () => ConfigurationOptions]);
export var PatchSummary = struct(
  n0,
  _PSa,
  0,
  [_I, _ICns, _MC, _FCai, _IOC, _IRC, _IPR, _OST, _OET, _ROeb, _Opera],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
);
export var PortProbeAction = struct(n0, _PPA, 0, [_PPD, _Blo], [() => PortProbeDetailList, 2]);
export var PortProbeDetail = struct(
  n0,
  _PPDo,
  0,
  [_LPD, _LID, _RID],
  [() => ActionLocalPortDetails, () => ActionLocalIpDetails, () => ActionRemoteIpDetails]
);
export var PortRange = struct(n0, _PR, 0, [_Be, _End_], [1, 1]);
export var PortRangeFromTo = struct(n0, _PRFT, 0, [_Fr, _To], [1, 1]);
export var ProcessDetails = struct(n0, _PDr, 0, [_N, _Pat, _Pi, _PPa, _LA, _TAe], [0, 0, 1, 1, 0, 0]);
export var PropagatingVgwSetDetails = struct(n0, _PVSD, 0, [_GI], [0]);
export var Range = struct(n0, _Ra, 0, [_Star, _End_, _SCta], [1, 1, 1]);
export var Recommendation = struct(n0, _Reco, 0, [_Tex, _Ur], [0, 0]);
export var _Record = struct(n0, _Recor, 0, [_JP, _RIec], [0, 1]);
export var Remediation = struct(n0, _Rem, 0, [_Reco], [() => Recommendation]);
export var Resource = struct(
  n0,
  _Reso,
  0,
  [_T, _I, _Par, _Reg, _RReso, _Tags, _DCat, _Deta, _ANp, _AAp],
  [0, 0, 0, 0, 0, 128 | 0, () => DataClassificationDetails, () => ResourceDetails, 0, 0]
);
export var ResourceDetails = struct(
  n0,
  _RDe,
  0,
  [
    _AASASG,
    _ACBP,
    _ACFD,
    _AEI,
    _AENI,
    _AESG,
    _AEV,
    _AEVw,
    _AEE,
    _AESw,
    _AENA,
    _AELB,
    _AEBE,
    _AED,
    _ASB,
    _ASAPAB,
    _ASOw,
    _ASMS,
    _AIAK,
    _AIU,
    _AIP,
    _AAGVS,
    _AAGVA,
    _ADDT,
    _AAGS,
    _AAGRA,
    _ACTT,
    _ASPC,
    _ACMC,
    _ARCw,
    _AELBw,
    _AIG,
    _AIRw,
    _AKK,
    _ALF,
    _ALLV,
    _ARDI,
    _AST,
    _ASQ,
    _AWWA,
    _ARDS,
    _ARDCS,
    _ARDC,
    _AECw,
    _AECws,
    _AETDw,
    _Conta,
    _Ot,
    _ARES,
    _AESws,
    _AASLC,
    _AEVC,
    _AECI,
    _AOSSD,
    _AEVES,
    _AXEC,
    _AWRBR,
    _AWRRBR,
    _AER,
    _AECwsk,
    _ANFFP,
    _ANFF,
    _ANFRG,
    _ARDSGw,
    _AKSw,
    _AETG,
    _AEAP,
    _ACFS,
    _ACWA,
    _AEVPC,
    _AWRRG,
    _AWRR,
    _AWRWA,
    _AWR,
    _AWRG,
    _AET,
    _ABBV,
    _ABBP,
    _ABRP,
    _AELT,
    _ASMNI,
    _AWWAw,
    _AWRGw,
    _AERT,
    _AAMB,
    _AASGQA,
    _AESR,
    _AGDD,
    _ASFSM,
    _AAWG,
    _AEEw,
    _ADEw,
    _AEEws,
    _ADRT,
    _ADRI,
    _ARHZ,
    _AMC,
    _ASAP,
    _AECVE,
    _CRod,
  ],
  [
    () => AwsAutoScalingAutoScalingGroupDetails,
    () => AwsCodeBuildProjectDetails,
    () => AwsCloudFrontDistributionDetails,
    () => AwsEc2InstanceDetails,
    () => AwsEc2NetworkInterfaceDetails,
    () => AwsEc2SecurityGroupDetails,
    () => AwsEc2VolumeDetails,
    () => AwsEc2VpcDetails,
    () => AwsEc2EipDetails,
    () => AwsEc2SubnetDetails,
    () => AwsEc2NetworkAclDetails,
    () => AwsElbv2LoadBalancerDetails,
    () => AwsElasticBeanstalkEnvironmentDetails,
    () => AwsElasticsearchDomainDetails,
    () => AwsS3BucketDetails,
    () => AwsS3AccountPublicAccessBlockDetails,
    () => AwsS3ObjectDetails,
    () => AwsSecretsManagerSecretDetails,
    () => AwsIamAccessKeyDetails,
    () => AwsIamUserDetails,
    () => AwsIamPolicyDetails,
    () => AwsApiGatewayV2StageDetails,
    () => AwsApiGatewayV2ApiDetails,
    () => AwsDynamoDbTableDetails,
    () => AwsApiGatewayStageDetails,
    () => AwsApiGatewayRestApiDetails,
    () => AwsCloudTrailTrailDetails,
    () => AwsSsmPatchComplianceDetails,
    () => AwsCertificateManagerCertificateDetails,
    () => AwsRedshiftClusterDetails,
    () => AwsElbLoadBalancerDetails,
    () => AwsIamGroupDetails,
    () => AwsIamRoleDetails,
    () => AwsKmsKeyDetails,
    () => AwsLambdaFunctionDetails,
    () => AwsLambdaLayerVersionDetails,
    () => AwsRdsDbInstanceDetails,
    () => AwsSnsTopicDetails,
    () => AwsSqsQueueDetails,
    () => AwsWafWebAclDetails,
    () => AwsRdsDbSnapshotDetails,
    () => AwsRdsDbClusterSnapshotDetails,
    () => AwsRdsDbClusterDetails,
    () => AwsEcsClusterDetails,
    () => AwsEcsContainerDetails,
    () => AwsEcsTaskDefinitionDetails,
    () => ContainerDetails,
    128 | 0,
    () => AwsRdsEventSubscriptionDetails,
    () => AwsEcsServiceDetails,
    () => AwsAutoScalingLaunchConfigurationDetails,
    () => AwsEc2VpnConnectionDetails,
    () => AwsEcrContainerImageDetails,
    () => AwsOpenSearchServiceDomainDetails,
    () => AwsEc2VpcEndpointServiceDetails,
    () => AwsXrayEncryptionConfigDetails,
    () => AwsWafRateBasedRuleDetails,
    () => AwsWafRegionalRateBasedRuleDetails,
    () => AwsEcrRepositoryDetails,
    () => AwsEksClusterDetails,
    () => AwsNetworkFirewallFirewallPolicyDetails,
    () => AwsNetworkFirewallFirewallDetails,
    () => AwsNetworkFirewallRuleGroupDetails,
    () => AwsRdsDbSecurityGroupDetails,
    () => AwsKinesisStreamDetails,
    () => AwsEc2TransitGatewayDetails,
    () => AwsEfsAccessPointDetails,
    () => AwsCloudFormationStackDetails,
    () => AwsCloudWatchAlarmDetails,
    () => AwsEc2VpcPeeringConnectionDetails,
    () => AwsWafRegionalRuleGroupDetails,
    () => AwsWafRegionalRuleDetails,
    () => AwsWafRegionalWebAclDetails,
    () => AwsWafRuleDetails,
    () => AwsWafRuleGroupDetails,
    () => AwsEcsTaskDetails,
    () => AwsBackupBackupVaultDetails,
    () => AwsBackupBackupPlanDetails,
    () => AwsBackupRecoveryPointDetails,
    () => AwsEc2LaunchTemplateDetails,
    () => AwsSageMakerNotebookInstanceDetails,
    () => AwsWafv2WebAclDetails,
    () => AwsWafv2RuleGroupDetails,
    () => AwsEc2RouteTableDetails,
    () => AwsAmazonMqBrokerDetails,
    () => AwsAppSyncGraphQlApiDetails,
    () => AwsEventSchemasRegistryDetails,
    () => AwsGuardDutyDetectorDetails,
    () => AwsStepFunctionStateMachineDetails,
    () => AwsAthenaWorkGroupDetails,
    () => AwsEventsEventbusDetails,
    () => AwsDmsEndpointDetails,
    () => AwsEventsEndpointDetails,
    () => AwsDmsReplicationTaskDetails,
    () => AwsDmsReplicationInstanceDetails,
    () => AwsRoute53HostedZoneDetails,
    () => AwsMskClusterDetails,
    () => AwsS3AccessPointDetails,
    () => AwsEc2ClientVpnEndpointDetails,
    () => CodeRepositoryDetails,
  ]
);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _C],
  [0, 0],

  __ResourceInUseException
);
export var RouteSetDetails = struct(
  n0,
  _RSDo,
  0,
  [_CGIa, _CNA, _DCBe, _DICB, _DPLI, _EOIGI, _GI, _IIn, _IOI, _LGI, _NGI, _NII, _Ori, _Sta, _TGI, _VPCI],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var RuleGroupDetails = struct(n0, _RGD, 0, [_RVu, _RSu], [() => RuleGroupVariables, () => RuleGroupSource]);
export var RuleGroupSource = struct(
  n0,
  _RGS,
  0,
  [_RSL, _RSul, _SRtat, _SRACA],
  [
    () => RuleGroupSourceListDetails,
    0,
    () => RuleGroupSourceStatefulRulesList,
    () => RuleGroupSourceStatelessRulesAndCustomActionsDetails,
  ]
);
export var RuleGroupSourceCustomActionsDetails = struct(
  n0,
  _RGSCAD,
  0,
  [_ADct, _ANct],
  [() => StatelessCustomActionDefinition, 0]
);
export var RuleGroupSourceListDetails = struct(n0, _RGSLD, 0, [_GRT, _TTa, _Tar], [0, 64 | 0, 64 | 0]);
export var RuleGroupSourceStatefulRulesDetails = struct(
  n0,
  _RGSSRD,
  0,
  [_A, _Hea, _ROu],
  [0, () => RuleGroupSourceStatefulRulesHeaderDetails, () => RuleGroupSourceStatefulRulesOptionsList]
);
export var RuleGroupSourceStatefulRulesHeaderDetails = struct(
  n0,
  _RGSSRHD,
  0,
  [_Des, _DPes, _Dir, _Prot, _So, _SPou],
  [0, 0, 0, 0, 0, 0]
);
export var RuleGroupSourceStatefulRulesOptionsDetails = struct(n0, _RGSSROD, 0, [_Ke, _Set], [0, 64 | 0]);
export var RuleGroupSourceStatelessRuleDefinition = struct(
  n0,
  _RGSSRDu,
  0,
  [_Act, _MAat],
  [64 | 0, () => RuleGroupSourceStatelessRuleMatchAttributes]
);
export var RuleGroupSourceStatelessRuleMatchAttributes = struct(
  n0,
  _RGSSRMA,
  0,
  [_DPest, _Dest, _Proto, _SPour, _Sou, _TFc],
  [
    () => RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList,
    () => RuleGroupSourceStatelessRuleMatchAttributesDestinationsList,
    64 | 1,
    () => RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList,
    () => RuleGroupSourceStatelessRuleMatchAttributesSourcesList,
    () => RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList,
  ]
);
export var RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts = struct(n0, _RGSSRMADP, 0, [_FP, _TPo], [1, 1]);
export var RuleGroupSourceStatelessRuleMatchAttributesDestinations = struct(n0, _RGSSRMAD, 0, [_ADd], [0]);
export var RuleGroupSourceStatelessRuleMatchAttributesSourcePorts = struct(n0, _RGSSRMASP, 0, [_FP, _TPo], [1, 1]);
export var RuleGroupSourceStatelessRuleMatchAttributesSources = struct(n0, _RGSSRMAS, 0, [_ADd], [0]);
export var RuleGroupSourceStatelessRuleMatchAttributesTcpFlags = struct(
  n0,
  _RGSSRMATF,
  0,
  [_Fl, _Mask],
  [64 | 0, 64 | 0]
);
export var RuleGroupSourceStatelessRulesAndCustomActionsDetails = struct(
  n0,
  _RGSSRACAD,
  0,
  [_CAu, _SRtate],
  [() => RuleGroupSourceCustomActionsList, () => RuleGroupSourceStatelessRulesList]
);
export var RuleGroupSourceStatelessRulesDetails = struct(
  n0,
  _RGSSRDul,
  0,
  [_Prio, _RDu],
  [1, () => RuleGroupSourceStatelessRuleDefinition]
);
export var RuleGroupVariables = struct(
  n0,
  _RGV,
  0,
  [_ISp, _PSo],
  [() => RuleGroupVariablesIpSetsDetails, () => RuleGroupVariablesPortSetsDetails]
);
export var RuleGroupVariablesIpSetsDetails = struct(n0, _RGVISD, 0, [_Def], [64 | 0]);
export var RuleGroupVariablesPortSetsDetails = struct(n0, _RGVPSD, 0, [_Def], [64 | 0]);
export var SecurityControl = struct(
  n0,
  _SCecu,
  0,
  [_SCIec, _SCAe, _Ti, _D, _RU, _SRev, _SCS, _US, _Para, _LUR],
  [0, 0, 0, 0, 0, 0, 0, 0, () => _Parameters, 0]
);
export var SecurityControlCustomParameter = struct(n0, _SCCP, 0, [_SCIec, _Para], [0, () => _Parameters]);
export var SecurityControlDefinition = struct(
  n0,
  _SCD,
  0,
  [_SCIec, _Ti, _D, _RU, _SRev, _CRA, _CPu, _PDar],
  [0, 0, 0, 0, 0, 0, 64 | 0, () => ParameterDefinitions]
);
export var SecurityControlParameter = struct(n0, _SCPec, 0, [_N, _Val], [0, 64 | 0]);
export var SecurityControlsConfiguration = struct(
  n0,
  _SCC,
  0,
  [_ESCI, _DSCI, _SCCPe],
  [64 | 0, 64 | 0, () => SecurityControlCustomParametersList]
);
export var SecurityHubPolicy = struct(
  n0,
  _SHP,
  0,
  [_SEe, _ESI, _SCC],
  [2, 64 | 0, () => SecurityControlsConfiguration]
);
export var SensitiveDataDetections = struct(n0, _SDD, 0, [_Cou, _T, _Oc], [1, 0, () => Occurrences]);
export var SensitiveDataResult = struct(n0, _SDR, 0, [_Cat, _Dete, _TCo], [0, () => SensitiveDataDetectionsList, 1]);
export var Sequence = struct(
  n0,
  _Seq,
  0,
  [_Ui, _Acto, _Endp, _Sig, _SIeq],
  [0, () => ActorsList, () => NetworkEndpointsList, () => SignalsList, () => IndicatorsList]
);
export var Severity = struct(n0, _Se, 0, [_Produ, _Lab, _Norm, _Orig], [1, 0, 1, 0]);
export var Signal = struct(
  n0,
  _Sign,
  0,
  [_T, _I, _Ti, _PA, _RIeso, _SIi, _N, _CA, _UA, _FSA, _LSAa, _Se, _Cou, _AIct, _EIndp],
  [0, 0, 0, 0, 64 | 0, () => IndicatorsList, 0, 1, 1, 1, 1, 1, 1, 64 | 0, 64 | 0]
);
export var SoftwarePackage = struct(
  n0,
  _SPof,
  0,
  [_N, _V, _Ep, _Rel, _Arc, _PMa, _FPil, _FIV, _Rem, _SLH, _SLA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var StatelessCustomActionDefinition = struct(n0, _SCADta, 0, [_PMA], [() => StatelessCustomPublishMetricAction]);
export var StatelessCustomPublishMetricAction = struct(
  n0,
  _SCPMA,
  0,
  [_Di],
  [() => StatelessCustomPublishMetricActionDimensionsList]
);
export var StatelessCustomPublishMetricActionDimension = struct(n0, _SCPMAD, 0, [_Val], [0]);
export var StatusReason = struct(n0, _SRtatu, 0, [_RCea, _D], [0, 0]);
export var StringConfigurationOptions = struct(n0, _SCO, 0, [_DVe, _REex, _EDxp], [0, 0, 0]);
export var StringListConfigurationOptions = struct(n0, _SLCO, 0, [_DVe, _REex, _MIa, _EDxp], [64 | 0, 0, 1, 0]);
export var Threat = struct(n0, _Threa, 0, [_N, _Se, _ICt, _FPile], [0, 0, 1, () => FilePathList]);
export var ThreatIntelIndicator = struct(n0, _TIIh, 0, [_T, _Val, _Cat, _LOA, _So, _SU], [0, 0, 0, 0, 0, 0]);
export var UnprocessedSecurityControl = struct(n0, _USCn, 0, [_SCIec, _ECr, _ERr], [0, 0, 0]);
export var UpdateConfigurationPolicyRequest = struct(
  n0,
  _UCPR,
  0,
  [_Id, _N, _D, _UR, _CPonf],
  [[0, 1], 0, 0, 0, () => Policy]
);
export var UpdateConfigurationPolicyResponse = struct(
  n0,
  _UCPRp,
  0,
  [_Ar, _I, _N, _D, _UA, _CA, _CPonf],
  [0, 0, 0, 0, 5, 5, () => Policy]
);
export var UpdateSecurityControlRequest = struct(n0, _USCR, 0, [_SCIec, _Para, _LUR], [0, () => _Parameters, 0]);
export var UpdateSecurityControlResponse = struct(n0, _USCRp, 0, [], []);
export var UserAccount = struct(n0, _UAs, 0, [_Ui, _N], [0, 0]);
export var VolumeMount = struct(n0, _VMol, 0, [_N, _MPou], [0, 0]);
export var VpcInfoCidrBlockSetDetails = struct(n0, _VICBSD, 0, [_CBi], [0]);
export var VpcInfoIpv6CidrBlockSetDetails = struct(n0, _VIICBSD, 0, [_ICB], [0]);
export var VpcInfoPeeringOptionsDetails = struct(n0, _VIPOD, 0, [_ADRFRV, _AEFLCLTRV, _AEFLVTRCL], [2, 2, 2]);
export var Vulnerability = struct(
  n0,
  _Vul,
  0,
  [_I, _VPu, _Cv, _RVe, _Ve, _RUe, _FAix, _ESp, _EAx, _LKEA, _CVo],
  [
    0,
    () => SoftwarePackageList,
    () => CvssList,
    64 | 0,
    () => VulnerabilityVendor,
    64 | 0,
    0,
    1,
    0,
    0,
    () => VulnerabilityCodeVulnerabilitiesList,
  ]
);
export var VulnerabilityCodeVulnerabilities = struct(
  n0,
  _VCV,
  0,
  [_Cw, _FPil, _SAo],
  [64 | 0, () => CodeVulnerabilitiesFilePath, 0]
);
export var VulnerabilityVendor = struct(n0, _VV, 0, [_N, _Ur, _VSe, _VCA, _VUA], [0, 0, 0, 0, 0]);
export var WafAction = struct(n0, _WA, 0, [_T], [0]);
export var WafExcludedRule = struct(n0, _WER, 0, [_RIu], [0]);
export var WafOverrideAction = struct(n0, _WOA, 0, [_T], [0]);
export var Workflow = struct(n0, _W, 0, [_St], [0]);
export var ActorsList = list(n0, _ALcto, 0, () => Actor);
export var AdjustmentList = list(n0, _ALd, 0, () => Adjustment);
export var AssociatedStandardsList = list(n0, _ASL, 0, () => AssociatedStandard);
export var AssociationSetList = list(n0, _ASLs, 0, () => AssociationSetDetails);
export var AvailabilityZones = list(n0, _AZv, 0, () => AvailabilityZone);
export var AwsAmazonMqBrokerUsersList = list(n0, _AAMBUL, 0, () => AwsAmazonMqBrokerUsersDetails);
export var AwsApiGatewayMethodSettingsList = list(n0, _AAGMSL, 0, () => AwsApiGatewayMethodSettings);
export var AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList = list(
  n0,
  _AASGQAAAPL,
  0,
  () => AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails
);
export var AwsAutoScalingAutoScalingGroupAvailabilityZonesList = list(
  n0,
  _AASASGAZL,
  0,
  () => AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails
);
export var AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList = list(
  n0,
  _AASASGMIPLTOL,
  0,
  () => AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails
);
export var AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = list(
  n0,
  _AASLCBDML,
  0,
  () => AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
);
export var AwsBackupBackupPlanAdvancedBackupSettingsList = list(
  n0,
  _ABBPABSL,
  0,
  () => AwsBackupBackupPlanAdvancedBackupSettingsDetails
);
export var AwsBackupBackupPlanRuleCopyActionsList = list(
  n0,
  _ABBPRCAL,
  0,
  () => AwsBackupBackupPlanRuleCopyActionsDetails
);
export var AwsBackupBackupPlanRuleList = list(n0, _ABBPRL, 0, () => AwsBackupBackupPlanRuleDetails);
export var AwsCertificateManagerCertificateDomainValidationOptions = list(
  n0,
  _ACMCDVOw,
  0,
  () => AwsCertificateManagerCertificateDomainValidationOption
);
export var AwsCertificateManagerCertificateExtendedKeyUsages = list(
  n0,
  _ACMCEKUw,
  0,
  () => AwsCertificateManagerCertificateExtendedKeyUsage
);
export var AwsCertificateManagerCertificateKeyUsages = list(
  n0,
  _ACMCKUw,
  0,
  () => AwsCertificateManagerCertificateKeyUsage
);
export var AwsCloudFormationStackOutputsList = list(n0, _ACFSOL, 0, () => AwsCloudFormationStackOutputsDetails);
export var AwsCloudFrontDistributionCacheBehaviorsItemList = list(
  n0,
  _ACFDCBIL,
  0,
  () => AwsCloudFrontDistributionCacheBehavior
);
export var AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = 64 | 1;

export var AwsCloudFrontDistributionOriginGroupsItemList = list(
  n0,
  _ACFDOGIL,
  0,
  () => AwsCloudFrontDistributionOriginGroup
);
export var AwsCloudFrontDistributionOriginItemList = list(n0, _ACFDOIL, 0, () => AwsCloudFrontDistributionOriginItem);
export var AwsCloudWatchAlarmDimensionsList = list(n0, _ACWADL, 0, () => AwsCloudWatchAlarmDimensionsDetails);
export var AwsCodeBuildProjectArtifactsList = list(n0, _ACBPAL, 0, () => AwsCodeBuildProjectArtifactsDetails);
export var AwsCodeBuildProjectEnvironmentEnvironmentVariablesList = list(
  n0,
  _ACBPEEVL,
  0,
  () => AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails
);
export var AwsDmsReplicationInstanceVpcSecurityGroupsList = list(
  n0,
  _ADRIVSGL,
  0,
  () => AwsDmsReplicationInstanceVpcSecurityGroupsDetails
);
export var AwsDynamoDbTableAttributeDefinitionList = list(n0, _ADDTADL, 0, () => AwsDynamoDbTableAttributeDefinition);
export var AwsDynamoDbTableGlobalSecondaryIndexList = list(
  n0,
  _ADDTGSIL,
  0,
  () => AwsDynamoDbTableGlobalSecondaryIndex
);
export var AwsDynamoDbTableKeySchemaList = list(n0, _ADDTKSL, 0, () => AwsDynamoDbTableKeySchema);
export var AwsDynamoDbTableLocalSecondaryIndexList = list(n0, _ADDTLSIL, 0, () => AwsDynamoDbTableLocalSecondaryIndex);
export var AwsDynamoDbTableReplicaGlobalSecondaryIndexList = list(
  n0,
  _ADDTRGSIL,
  0,
  () => AwsDynamoDbTableReplicaGlobalSecondaryIndex
);
export var AwsDynamoDbTableReplicaList = list(n0, _ADDTRL, 0, () => AwsDynamoDbTableReplica);
export var AwsEc2ClientVpnEndpointAuthenticationOptionsList = list(
  n0,
  _AECVEAOL,
  0,
  () => AwsEc2ClientVpnEndpointAuthenticationOptionsDetails
);
export var AwsEc2InstanceNetworkInterfacesList = list(n0, _AEINIL, 0, () => AwsEc2InstanceNetworkInterfacesDetails);
export var AwsEc2LaunchTemplateDataBlockDeviceMappingSetList = list(
  n0,
  _AELTDBDMSL,
  0,
  () => AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails
);
export var AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList = list(
  n0,
  _AELTDEGSSL,
  0,
  () => AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails
);
export var AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList = list(
  n0,
  _AELTDEIASL,
  0,
  () => AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails
);
export var AwsEc2LaunchTemplateDataLicenseSetList = list(
  n0,
  _AELTDLSL,
  0,
  () => AwsEc2LaunchTemplateDataLicenseSetDetails
);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList = list(
  n0,
  _AELTDNISIPL,
  0,
  () => AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails
);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList = list(
  n0,
  _AELTDNISIAL,
  0,
  () => AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails
);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList = list(
  n0,
  _AELTDNISIPLw,
  0,
  () => AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails
);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetList = list(
  n0,
  _AELTDNISL,
  0,
  () => AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails
);
export var AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList = list(
  n0,
  _AELTDNISPIAL,
  0,
  () => AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails
);
export var AwsEc2NetworkAclAssociationList = list(n0, _AENAAL, 0, () => AwsEc2NetworkAclAssociation);
export var AwsEc2NetworkAclEntryList = list(n0, _AENAEL, 0, () => AwsEc2NetworkAclEntry);
export var AwsEc2NetworkInterfaceIpV6AddressList = list(
  n0,
  _AENIIVAL,
  0,
  () => AwsEc2NetworkInterfaceIpV6AddressDetail
);
export var AwsEc2NetworkInterfacePrivateIpAddressList = list(
  n0,
  _AENIPIAL,
  0,
  () => AwsEc2NetworkInterfacePrivateIpAddressDetail
);
export var AwsEc2NetworkInterfaceSecurityGroupList = list(n0, _AENISGL, 0, () => AwsEc2NetworkInterfaceSecurityGroup);
export var AwsEc2SecurityGroupIpPermissionList = list(n0, _AESGIPL, 0, () => AwsEc2SecurityGroupIpPermission);
export var AwsEc2SecurityGroupIpRangeList = list(n0, _AESGIRL, 0, () => AwsEc2SecurityGroupIpRange);
export var AwsEc2SecurityGroupIpv6RangeList = list(n0, _AESGIRLw, 0, () => AwsEc2SecurityGroupIpv6Range);
export var AwsEc2SecurityGroupPrefixListIdList = list(n0, _AESGPLIL, 0, () => AwsEc2SecurityGroupPrefixListId);
export var AwsEc2SecurityGroupUserIdGroupPairList = list(n0, _AESGUIGPL, 0, () => AwsEc2SecurityGroupUserIdGroupPair);
export var AwsEc2VolumeAttachmentList = list(n0, _AEVAL, 0, () => AwsEc2VolumeAttachment);
export var AwsEc2VpcEndpointServiceServiceTypeList = list(
  n0,
  _AEVESSTL,
  0,
  () => AwsEc2VpcEndpointServiceServiceTypeDetails
);
export var AwsEc2VpnConnectionOptionsTunnelOptionsList = list(
  n0,
  _AEVCOTOL,
  0,
  () => AwsEc2VpnConnectionOptionsTunnelOptionsDetails
);
export var AwsEc2VpnConnectionRoutesList = list(n0, _AEVCRL, 0, () => AwsEc2VpnConnectionRoutesDetails);
export var AwsEc2VpnConnectionVgwTelemetryList = list(n0, _AEVCVTL, 0, () => AwsEc2VpnConnectionVgwTelemetryDetails);
export var AwsEcsClusterClusterSettingsList = list(n0, _AECCSL, 0, () => AwsEcsClusterClusterSettingsDetails);
export var AwsEcsClusterDefaultCapacityProviderStrategyList = list(
  n0,
  _AECDCPSL,
  0,
  () => AwsEcsClusterDefaultCapacityProviderStrategyDetails
);
export var AwsEcsContainerDetailsList = list(n0, _AECDL, 0, () => AwsEcsContainerDetails);
export var AwsEcsServiceCapacityProviderStrategyList = list(
  n0,
  _AESCPSL,
  0,
  () => AwsEcsServiceCapacityProviderStrategyDetails
);
export var AwsEcsServiceLoadBalancersList = list(n0, _AESLBL, 0, () => AwsEcsServiceLoadBalancersDetails);
export var AwsEcsServicePlacementConstraintsList = list(n0, _AESPCL, 0, () => AwsEcsServicePlacementConstraintsDetails);
export var AwsEcsServicePlacementStrategiesList = list(n0, _AESPSL, 0, () => AwsEcsServicePlacementStrategiesDetails);
export var AwsEcsServiceServiceRegistriesList = list(n0, _AESSRL, 0, () => AwsEcsServiceServiceRegistriesDetails);
export var AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = list(
  n0,
  _AETDCDDOL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = list(
  n0,
  _AETDCDEFL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = list(
  n0,
  _AETDCDEL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = list(
  n0,
  _AETDCDEHL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = list(
  n0,
  _AETDCDLPDL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = list(
  n0,
  _AETDCDLPTL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsList = list(
  n0,
  _AETDCDL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList = list(
  n0,
  _AETDCDLCSOL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = list(
  n0,
  _AETDCDMPL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = list(
  n0,
  _AETDCDPML,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = list(
  n0,
  _AETDCDRRL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsSecretsList = list(
  n0,
  _AETDCDSL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = list(
  n0,
  _AETDCDSCL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = list(
  n0,
  _AETDCDUL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails
);
export var AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = list(
  n0,
  _AETDCDVFL,
  0,
  () => AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails
);
export var AwsEcsTaskDefinitionInferenceAcceleratorsList = list(
  n0,
  _AETDIAL,
  0,
  () => AwsEcsTaskDefinitionInferenceAcceleratorsDetails
);
export var AwsEcsTaskDefinitionPlacementConstraintsList = list(
  n0,
  _AETDPCL,
  0,
  () => AwsEcsTaskDefinitionPlacementConstraintsDetails
);
export var AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = list(
  n0,
  _AETDPCPCPL,
  0,
  () => AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
);
export var AwsEcsTaskDefinitionVolumesList = list(n0, _AETDVL, 0, () => AwsEcsTaskDefinitionVolumesDetails);
export var AwsEcsTaskVolumeDetailsList = list(n0, _AETVDL, 0, () => AwsEcsTaskVolumeDetails);
export var AwsEksClusterLoggingClusterLoggingList = list(
  n0,
  _AECLCLL,
  0,
  () => AwsEksClusterLoggingClusterLoggingDetails
);
export var AwsElasticBeanstalkEnvironmentEnvironmentLinks = list(
  n0,
  _AEBEELw,
  0,
  () => AwsElasticBeanstalkEnvironmentEnvironmentLink
);
export var AwsElasticBeanstalkEnvironmentOptionSettings = list(
  n0,
  _AEBEOSw,
  0,
  () => AwsElasticBeanstalkEnvironmentOptionSetting
);
export var AwsElbAppCookieStickinessPolicies = list(n0, _AEACSPw, 0, () => AwsElbAppCookieStickinessPolicy);
export var AwsElbLbCookieStickinessPolicies = list(n0, _AELCSPw, 0, () => AwsElbLbCookieStickinessPolicy);
export var AwsElbLoadBalancerAdditionalAttributeList = list(
  n0,
  _AELBAAL,
  0,
  () => AwsElbLoadBalancerAdditionalAttribute
);
export var AwsElbLoadBalancerBackendServerDescriptions = list(
  n0,
  _AELBBSDw,
  0,
  () => AwsElbLoadBalancerBackendServerDescription
);
export var AwsElbLoadBalancerInstances = list(n0, _AELBIw, 0, () => AwsElbLoadBalancerInstance);
export var AwsElbLoadBalancerListenerDescriptions = list(n0, _AELBLDw, 0, () => AwsElbLoadBalancerListenerDescription);
export var AwsElbv2LoadBalancerAttributes = list(n0, _AELBAws, 0, () => AwsElbv2LoadBalancerAttribute);
export var AwsEventsEndpointEventBusesList = list(n0, _AEEEBL, 0, () => AwsEventsEndpointEventBusesDetails);
export var AwsGuardDutyDetectorFeaturesList = list(n0, _AGDDFL, 0, () => AwsGuardDutyDetectorFeaturesDetails);
export var AwsIamAttachedManagedPolicyList = list(n0, _AIAMPL, 0, () => AwsIamAttachedManagedPolicy);
export var AwsIamGroupPolicyList = list(n0, _AIGPL, 0, () => AwsIamGroupPolicy);
export var AwsIamInstanceProfileList = list(n0, _AIIPL, 0, () => AwsIamInstanceProfile);
export var AwsIamInstanceProfileRoles = list(n0, _AIIPRw, 0, () => AwsIamInstanceProfileRole);
export var AwsIamPolicyVersionList = list(n0, _AIPVL, 0, () => AwsIamPolicyVersion);
export var AwsIamRolePolicyList = list(n0, _AIRPL, 0, () => AwsIamRolePolicy);
export var AwsIamUserPolicyList = list(n0, _AIUPL, 0, () => AwsIamUserPolicy);
export var AwsLambdaFunctionLayerList = list(n0, _ALFLL, 0, () => AwsLambdaFunctionLayer);
export var AwsMountPointList = list(n0, _AMPL, 0, () => AwsMountPoint);
export var AwsNetworkFirewallFirewallSubnetMappingsList = list(
  n0,
  _ANFFSML,
  0,
  () => AwsNetworkFirewallFirewallSubnetMappingsDetails
);
export var AwsRdsDbClusterAssociatedRoles = list(n0, _ARDCARw, 0, () => AwsRdsDbClusterAssociatedRole);
export var AwsRdsDbClusterMembers = list(n0, _ARDCMw, 0, () => AwsRdsDbClusterMember);
export var AwsRdsDbClusterOptionGroupMemberships = list(n0, _ARDCOGMw, 0, () => AwsRdsDbClusterOptionGroupMembership);
export var AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes = list(
  n0,
  _ARDCSDCSAw,
  0,
  () => AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute
);
export var AwsRdsDbDomainMemberships = list(n0, _ARDDMw, 0, () => AwsRdsDbDomainMembership);
export var AwsRdsDbInstanceAssociatedRoles = list(n0, _ARDIARw, 0, () => AwsRdsDbInstanceAssociatedRole);
export var AwsRdsDbInstanceVpcSecurityGroups = list(n0, _ARDIVSGw, 0, () => AwsRdsDbInstanceVpcSecurityGroup);
export var AwsRdsDbOptionGroupMemberships = list(n0, _ARDOGMw, 0, () => AwsRdsDbOptionGroupMembership);
export var AwsRdsDbParameterGroups = list(n0, _ARDPGw, 0, () => AwsRdsDbParameterGroup);
export var AwsRdsDbProcessorFeatures = list(n0, _ARDPFw, 0, () => AwsRdsDbProcessorFeature);
export var AwsRdsDbSecurityGroupEc2SecurityGroups = list(
  n0,
  _ARDSGESGw,
  0,
  () => AwsRdsDbSecurityGroupEc2SecurityGroup
);
export var AwsRdsDbSecurityGroupIpRanges = list(n0, _ARDSGIRw, 0, () => AwsRdsDbSecurityGroupIpRange);
export var AwsRdsDbStatusInfos = list(n0, _ARDSIw, 0, () => AwsRdsDbStatusInfo);
export var AwsRdsDbSubnetGroupSubnets = list(n0, _ARDSGSw, 0, () => AwsRdsDbSubnetGroupSubnet);
export var AwsRedshiftClusterClusterNodes = list(n0, _ARCCNw, 0, () => AwsRedshiftClusterClusterNode);
export var AwsRedshiftClusterClusterParameterGroups = list(
  n0,
  _ARCCPGw,
  0,
  () => AwsRedshiftClusterClusterParameterGroup
);
export var AwsRedshiftClusterClusterParameterStatusList = list(
  n0,
  _ARCCPSL,
  0,
  () => AwsRedshiftClusterClusterParameterStatus
);
export var AwsRedshiftClusterClusterSecurityGroups = list(
  n0,
  _ARCCSGw,
  0,
  () => AwsRedshiftClusterClusterSecurityGroup
);
export var AwsRedshiftClusterDeferredMaintenanceWindows = list(
  n0,
  _ARCDMWw,
  0,
  () => AwsRedshiftClusterDeferredMaintenanceWindow
);
export var AwsRedshiftClusterIamRoles = list(n0, _ARCIRw, 0, () => AwsRedshiftClusterIamRole);
export var AwsRedshiftClusterVpcSecurityGroups = list(n0, _ARCVSGw, 0, () => AwsRedshiftClusterVpcSecurityGroup);
export var AwsRoute53HostedZoneNameServersList = 64 | 0;

export var AwsRoute53HostedZoneVpcsList = list(n0, _ARHZVL, 0, () => AwsRoute53HostedZoneVpcDetails);
export var AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList = list(
  n0,
  _ASBBLCRFPOL,
  0,
  () => AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
);
export var AwsS3BucketBucketLifecycleConfigurationRulesList = list(
  n0,
  _ASBBLCRL,
  0,
  () => AwsS3BucketBucketLifecycleConfigurationRulesDetails
);
export var AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList = list(
  n0,
  _ASBBLCRNVTL,
  0,
  () => AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails
);
export var AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = list(
  n0,
  _ASBBLCRTL,
  0,
  () => AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
);
export var AwsS3BucketNotificationConfigurationDetails = list(
  n0,
  _ASBNCDw,
  0,
  () => AwsS3BucketNotificationConfigurationDetail
);
export var AwsS3BucketNotificationConfigurationEvents = 64 | 0;

export var AwsS3BucketNotificationConfigurationS3KeyFilterRules = list(
  n0,
  _ASBNCSKFRw,
  0,
  () => AwsS3BucketNotificationConfigurationS3KeyFilterRule
);
export var AwsS3BucketServerSideEncryptionRules = list(n0, _ASBSSERw, 0, () => AwsS3BucketServerSideEncryptionRule);
export var AwsS3BucketWebsiteConfigurationRoutingRules = list(
  n0,
  _ASBWCRRw,
  0,
  () => AwsS3BucketWebsiteConfigurationRoutingRule
);
export var AwsSnsTopicSubscriptionList = list(n0, _ASTSL, 0, () => AwsSnsTopicSubscription);
export var AwsStepFunctionStateMachineLoggingConfigurationDestinationsList = list(
  n0,
  _ASFSMLCDL,
  0,
  () => AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails
);
export var AwsWafRateBasedRuleMatchPredicateList = list(n0, _AWRBRMPL, 0, () => AwsWafRateBasedRuleMatchPredicate);
export var AwsWafRegionalRateBasedRuleMatchPredicateList = list(
  n0,
  _AWRRBRMPL,
  0,
  () => AwsWafRegionalRateBasedRuleMatchPredicate
);
export var AwsWafRegionalRuleGroupRulesList = list(n0, _AWRRGRL, 0, () => AwsWafRegionalRuleGroupRulesDetails);
export var AwsWafRegionalRulePredicateList = list(n0, _AWRRPL, 0, () => AwsWafRegionalRulePredicateListDetails);
export var AwsWafRegionalWebAclRulesList = list(n0, _AWRWARL, 0, () => AwsWafRegionalWebAclRulesListDetails);
export var AwsWafRuleGroupRulesList = list(n0, _AWRGRL, 0, () => AwsWafRuleGroupRulesDetails);
export var AwsWafRulePredicateList = list(n0, _AWRPL, 0, () => AwsWafRulePredicateListDetails);
export var AwsWafv2InsertHeadersList = list(n0, _AWIHL, 0, () => AwsWafv2CustomHttpHeader);
export var AwsWafv2RulesList = list(n0, _AWRL, 0, () => AwsWafv2RulesDetails);
export var AwsWafWebAclRuleList = list(n0, _AWWARL, 0, () => AwsWafWebAclRule);
export var BatchImportFindingsRequestFindingList = list(n0, _BIFRFL, 0, () => AwsSecurityFinding);
export var Cells = list(n0, _Cell, 0, () => Cell);
export var CidrBlockAssociationList = list(n0, _CBAL, 0, () => CidrBlockAssociation);
export var CustomDataIdentifiersDetectionsList = list(n0, _CDIDL, 0, () => CustomDataIdentifiersDetections);
export var CustomizableProperties = 64 | 0;

export var CvssList = list(n0, _CLv, 0, () => Cvss);
export var DisabledSecurityControlIdentifierList = 64 | 0;

export var EnabledSecurityControlIdentifierList = 64 | 0;

export var EnabledStandardIdentifierList = 64 | 0;

export var FilePathList = list(n0, _FPL, 0, () => FilePaths);
export var FirewallPolicyStatefulRuleGroupReferencesList = list(
  n0,
  _FPSRGRL,
  0,
  () => FirewallPolicyStatefulRuleGroupReferencesDetails
);
export var FirewallPolicyStatelessCustomActionsList = list(
  n0,
  _FPSCAL,
  0,
  () => FirewallPolicyStatelessCustomActionsDetails
);
export var FirewallPolicyStatelessRuleGroupReferencesList = list(
  n0,
  _FPSRGRLi,
  0,
  () => FirewallPolicyStatelessRuleGroupReferencesDetails
);
export var ImportFindingsErrorList = list(n0, _IFEL, 0, () => ImportFindingsError);
export var IndicatorsList = list(n0, _IL, 0, () => Indicator);
export var IntegerList = 64 | 1;

export var Ipv6CidrBlockAssociationList = list(n0, _ICBAL, 0, () => Ipv6CidrBlockAssociation);
export var MalwareList = list(n0, _ML, 0, () => Malware);
export var NetworkEndpointsList = list(n0, _NEL, 0, () => NetworkEndpoint);
export var NetworkPathList = list(n0, _NPL, 0, () => NetworkPathComponent);
export var NonEmptyStringList = 64 | 0;

export var Pages = list(n0, _Pag, 0, () => Page);
export var PortProbeDetailList = list(n0, _PPDL, 0, () => PortProbeDetail);
export var PortRangeList = list(n0, _PRL, 0, () => PortRange);
export var PropagatingVgwSetList = list(n0, _PVSL, 0, () => PropagatingVgwSetDetails);
export var Ranges = list(n0, _Ran, 0, () => Range);
export var Records = list(n0, _Rec, 0, () => _Record);
export var ResourceList = list(n0, _RLe, 0, () => Resource);
export var RouteSetList = list(n0, _RSLo, 0, () => RouteSetDetails);
export var RuleGroupSourceCustomActionsList = list(n0, _RGSCAL, 0, () => RuleGroupSourceCustomActionsDetails);
export var RuleGroupSourceStatefulRulesList = list(n0, _RGSSRL, 0, () => RuleGroupSourceStatefulRulesDetails);
export var RuleGroupSourceStatefulRulesOptionsList = list(
  n0,
  _RGSSROL,
  0,
  () => RuleGroupSourceStatefulRulesOptionsDetails
);
export var RuleGroupSourceStatefulRulesRuleOptionsSettingsList = 64 | 0;

export var RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList = list(
  n0,
  _RGSSRMADPL,
  0,
  () => RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts
);
export var RuleGroupSourceStatelessRuleMatchAttributesDestinationsList = list(
  n0,
  _RGSSRMADL,
  0,
  () => RuleGroupSourceStatelessRuleMatchAttributesDestinations
);
export var RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = 64 | 1;

export var RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList = list(
  n0,
  _RGSSRMASPL,
  0,
  () => RuleGroupSourceStatelessRuleMatchAttributesSourcePorts
);
export var RuleGroupSourceStatelessRuleMatchAttributesSourcesList = list(
  n0,
  _RGSSRMASL,
  0,
  () => RuleGroupSourceStatelessRuleMatchAttributesSources
);
export var RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList = list(
  n0,
  _RGSSRMATFL,
  0,
  () => RuleGroupSourceStatelessRuleMatchAttributesTcpFlags
);
export var RuleGroupSourceStatelessRulesList = list(n0, _RGSSRLu, 0, () => RuleGroupSourceStatelessRulesDetails);
export var SecurityControlCustomParametersList = list(n0, _SCCPL, 0, () => SecurityControlCustomParameter);
export var SecurityControlDefinitions = list(n0, _SCDe, 0, () => SecurityControlDefinition);
export var SecurityControlParametersList = list(n0, _SCPL, 0, () => SecurityControlParameter);
export var SecurityControls = list(n0, _SCec, 0, () => SecurityControl);
export var SecurityGroups = 64 | 0;

export var SensitiveDataDetectionsList = list(n0, _SDDL, 0, () => SensitiveDataDetections);
export var SensitiveDataResultList = list(n0, _SDRL, 0, () => SensitiveDataResult);
export var SignalsList = list(n0, _SLi, 0, () => Signal);
export var SoftwarePackageList = list(n0, _SPL, 0, () => SoftwarePackage);
export var StatelessCustomPublishMetricActionDimensionsList = list(
  n0,
  _SCPMADL,
  0,
  () => StatelessCustomPublishMetricActionDimension
);
export var StatusReasonsList = list(n0, _SRL, 0, () => StatusReason);
export var ThreatIntelIndicatorList = list(n0, _TIIL, 0, () => ThreatIntelIndicator);
export var ThreatList = list(n0, _TL, 0, () => Threat);
export var UnprocessedSecurityControls = list(n0, _USCnp, 0, () => UnprocessedSecurityControl);
export var VolumeMountList = list(n0, _VML, 0, () => VolumeMount);
export var VpcInfoCidrBlockSetList = list(n0, _VICBSL, 0, () => VpcInfoCidrBlockSetDetails);
export var VpcInfoIpv6CidrBlockSetList = list(n0, _VIICBSL, 0, () => VpcInfoIpv6CidrBlockSetDetails);
export var VulnerabilityCodeVulnerabilitiesList = list(n0, _VCVL, 0, () => VulnerabilityCodeVulnerabilities);
export var VulnerabilityList = list(n0, _VLu, 0, () => Vulnerability);
export var WafExcludedRuleList = list(n0, _WERL, 0, () => WafExcludedRule);
export var ParameterDefinitions = map(n0, _PDar, 0, 0, () => ParameterDefinition);
export var _Parameters = map(n0, _Para, 0, 0, () => ParameterConfiguration);
export var ConfigurationOptions = uni(
  n0,
  _COon,
  0,
  [_Inte, _ILnt, _Dou, _Str, _SLtr, _Bo, _Enu, _ELnu],
  [
    () => IntegerConfigurationOptions,
    () => IntegerListConfigurationOptions,
    () => DoubleConfigurationOptions,
    () => StringConfigurationOptions,
    () => StringListConfigurationOptions,
    () => BooleanConfigurationOptions,
    () => EnumConfigurationOptions,
    () => EnumListConfigurationOptions,
  ]
);
export var ParameterValue = uni(
  n0,
  _PVa,
  0,
  [_Inte, _ILnt, _Dou, _Str, _SLtr, _Bo, _Enu, _ELnu],
  [1, 64 | 1, 1, 0, 64 | 0, 2, 0, 64 | 0]
);
export var Policy = uni(n0, _Pol, 0, [_SH], [() => SecurityHubPolicy]);
export var BatchGetSecurityControls = op(
  n0,
  _BGSC,
  {
    [_h]: ["POST", "/securityControls/batchGet", 200],
  },
  () => BatchGetSecurityControlsRequest,
  () => BatchGetSecurityControlsResponse
);
export var BatchImportFindings = op(
  n0,
  _BIF,
  {
    [_h]: ["POST", "/findings/import", 200],
  },
  () => BatchImportFindingsRequest,
  () => BatchImportFindingsResponse
);
export var GetConfigurationPolicy = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/configurationPolicy/get/{Identifier}", 200],
  },
  () => GetConfigurationPolicyRequest,
  () => GetConfigurationPolicyResponse
);
export var GetSecurityControlDefinition = op(
  n0,
  _GSCD,
  {
    [_h]: ["GET", "/securityControl/definition", 200],
  },
  () => GetSecurityControlDefinitionRequest,
  () => GetSecurityControlDefinitionResponse
);
export var ListSecurityControlDefinitions = op(
  n0,
  _LSCD,
  {
    [_h]: ["GET", "/securityControls/definitions", 200],
  },
  () => ListSecurityControlDefinitionsRequest,
  () => ListSecurityControlDefinitionsResponse
);
export var UpdateConfigurationPolicy = op(
  n0,
  _UCP,
  {
    [_h]: ["PATCH", "/configurationPolicy/{Identifier}", 200],
  },
  () => UpdateConfigurationPolicyRequest,
  () => UpdateConfigurationPolicyResponse
);
export var UpdateSecurityControl = op(
  n0,
  _USCp,
  {
    [_h]: ["PATCH", "/securityControl/update", 200],
  },
  () => UpdateSecurityControlRequest,
  () => UpdateSecurityControlResponse
);
