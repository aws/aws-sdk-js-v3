// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAC,
  _AADR,
  _AAF,
  _AAI,
  _AAr,
  _AB,
  _Ab,
  _ABCV,
  _ABEC,
  _ABOC,
  _Ac,
  _ACr,
  _AD,
  _ADC,
  _ADDDR,
  _ADMMR,
  _ADn,
  _ADO,
  _ADOx,
  _ADPV,
  _ADR,
  _Af,
  _AFg,
  _AHFO,
  _AIn,
  _ALO,
  _ALOL,
  _ALRO,
  _ALS,
  _ALSx,
  _ALV,
  _Am,
  _an,
  _ANl,
  _ANx,
  _AO,
  _AOc,
  _AOr,
  _AOs,
  _AOx,
  _AOxi,
  _Ar,
  _Arc,
  _ARS,
  _ASC,
  _ASCg,
  _ASCL,
  _ASE,
  _ASFSC,
  _ASl,
  _ASSr,
  _AST,
  _ASv,
  _ASx,
  _ATLO,
  _ATpp,
  _ATr,
  _AU,
  _AV,
  _AVc,
  _BA,
  _Ba,
  _BCa,
  _BCAFW,
  _BCC,
  _BCFW,
  _BCi,
  _BCL,
  _BCO,
  _BCo,
  _BCSC,
  _BCV,
  _BDL,
  _BIL,
  _BMS,
  _BMV,
  _BNu,
  _BO,
  _Bo,
  _Bor,
  _Bot,
  _BPAFW,
  _BPCC,
  _BPDFL,
  _BPFW,
  _BPMFL,
  _BPO,
  _BPSC,
  _BPSO,
  _BPV,
  _Bre,
  _BS,
  _BSa,
  _BSC,
  _BSCL,
  _BSCo,
  _BSDCDC,
  _BSDDSCL,
  _BSDNDC,
  _BSo,
  _BSRC,
  _BSRDC,
  _BSRDCL,
  _BSRPBC,
  _BSS,
  _BT,
  _BV,
  _BVa,
  _BVo,
  _BW,
  _BWO,
  _C,
  _CA,
  _Ca,
  _CACL,
  _CAD,
  _CADL,
  _CADO,
  _CADo,
  _CADOa,
  _CADon,
  _CAF,
  _CAFO,
  _CAI,
  _Cal,
  _CALO,
  _CALOa,
  _CAo,
  _CAR,
  _CAr,
  _CARr,
  _Cat,
  _Cate,
  _CC,
  _CCAFW,
  _CCC,
  _CCCo,
  _CCCu,
  _CCFW,
  _CCh,
  _CCha,
  _CCLo,
  _CCLu,
  _CCol,
  _CColo,
  _CColu,
  _CCom,
  _CCS,
  _CCSC,
  _CCSL,
  _CCu,
  _CCus,
  _CCust,
  _CCV,
  _CCVu,
  _CDC,
  _CDDF,
  _CDF,
  _CDFC,
  _CDFo,
  _CDL,
  _CDo,
  _CDR,
  _CDr,
  _CDre,
  _CDRr,
  _Ce,
  _CF,
  _CFa,
  _CFat,
  _CFC,
  _CFCIC,
  _CFCIO,
  _CFCo,
  _CFCon,
  _CFCu,
  _CFE,
  _CFGC,
  _CFI,
  _CFIDC,
  _CFIS,
  _CFLC,
  _CFO,
  _CFo,
  _CFol,
  _CFon,
  _CFSC,
  _CFT,
  _CH,
  _CHL,
  _CHo,
  _CHS,
  _CIC,
  _CIF,
  _CIL,
  _CILC,
  _CILCo,
  _CILo,
  _CIol,
  _CIom,
  _CL,
  _CLC,
  _CLl,
  _CLO,
  _CLo,
  _CLOo,
  _CLOol,
  _CLV,
  _CM,
  _CMC,
  _CMF,
  _CMFa,
  _CMO,
  _CMo,
  _CMol,
  _CMom,
  _CNO,
  _CNu,
  _CNV,
  _Co,
  _Col,
  _Colu,
  _Com,
  _Comp,
  _Compu,
  _Con,
  _Conf,
  _COo,
  _COon,
  _CRDV,
  _CRi,
  _CS,
  _CSCL,
  _CSe,
  _CSO,
  _CSo,
  _CSol,
  _CSolum,
  _CSolumn,
  _CSOo,
  _CSOol,
  _CSr,
  _CSro,
  _CSS,
  _CSV,
  _CT,
  _CTC,
  _CTe,
  _CTI,
  _CTM,
  _CTO,
  _CTolu,
  _CTont,
  _CTR,
  _CTr,
  _CTRr,
  _CU,
  _CV,
  _CVa,
  _CVF,
  _CVo,
  _CVus,
  _CW,
  _DAD,
  _DADR,
  _DADRe,
  _DAF,
  _DAO,
  _Date,
  _DB,
  _DBO,
  _DC,
  _DCa,
  _DCat,
  _DCDC,
  _DCe,
  _DCi,
  _DCO,
  _DCW,
  _DCy,
  _DD,
  _DDCDO,
  _DDD,
  _DDDR,
  _DDDRe,
  _DDF,
  _DDFL,
  _DDFr,
  _DDFri,
  _DDO,
  _DDSJ,
  _DDSJR,
  _DDSJRe,
  _DDTPCO,
  _DDTPO,
  _DDV,
  _DDVy,
  _De,
  _Def,
  _Del,
  _Des,
  _DFCC,
  _DFCO,
  _DFDDCO,
  _DFFLC,
  _DFim,
  _DFL,
  _DFLCO,
  _DFSI,
  _DG,
  _DGLC,
  _DI,
  _DIL,
  _DILC,
  _Dim,
  _Dir,
  _DIV,
  _DKF,
  _DL,
  _DLO,
  _DLOe,
  _DLT,
  _DLTa,
  _DMF,
  _DMi,
  _DNDC,
  _DNSC,
  _DO,
  _DOe,
  _DOi,
  _DOo,
  _DPata,
  _DPC,
  _DPCa,
  _DPCL,
  _DPD,
  _DPDUDO,
  _DPe,
  _DPec,
  _DPeci,
  _DPL,
  _DPLC,
  _DPLe,
  _DPLT,
  _DPMLO,
  _DPO,
  _DPOa,
  _DPS,
  _DPT,
  _DPTO,
  _DPV,
  _DPVL,
  _DQAEO,
  _Dr,
  _DRDTCO,
  _DRDTO,
  _DSAat,
  _DSatao,
  _DSBLC,
  _DSCata,
  _DSCO,
  _DSE,
  _DSec,
  _DSIatae,
  _DSID,
  _DSIDa,
  _DSIDL,
  _DSO,
  _DSPa,
  _DSPN,
  _DSR,
  _DSRat,
  _DSRL,
  _DSSe,
  _DSSO,
  _DST,
  _DTACO,
  _DTAO,
  _DTD,
  _DTDR,
  _DTDRe,
  _DTDV,
  _DTF,
  _DTFC,
  _DTFCO,
  _DTFO,
  _DTH,
  _DTP,
  _DTPa,
  _DTPat,
  _DTPCDO,
  _DTPD,
  _DTPL,
  _DTVWUC,
  _DVat,
  _DVC,
  _DVD,
  _DVef,
  _DVPO,
  _DVWUC,
  _DVy,
  _E,
  _Ea,
  _EDn,
  _EDSA,
  _EH,
  _EHCL,
  _EHFO,
  _EIl,
  _El,
  _Ele,
  _EPC,
  _Er,
  _ESO,
  _ET,
  _ETCSVO,
  _EV,
  _EWHFO,
  _FAo,
  _FBT,
  _FCAFW,
  _FCC,
  _FCDFL,
  _FCDLO,
  _FCFW,
  _FCI,
  _FCi,
  _FCil,
  _FCilt,
  _FCL,
  _FCLo,
  _FCMFL,
  _FCo,
  _FCon,
  _FCor,
  _FCore,
  _FCorec,
  _FCoreca,
  _FCoreg,
  _FCSC,
  _FCSCu,
  _FCV,
  _FDDC,
  _FDo,
  _FDPV,
  _FDTPC,
  _FFL,
  _FFLC,
  _FFLCSO,
  _FFLE,
  _FFLEBS,
  _FFLEBSr,
  _FFLEL,
  _FFLSCSO,
  _FFo,
  _FFr,
  _FFSLC,
  _FG,
  _FGI,
  _FGi,
  _FGil,
  _FGL,
  _Fi,
  _Fie,
  _FIi,
  _FIil,
  _Fil,
  _File,
  _FL,
  _FLC,
  _FLCi,
  _FLi,
  _FLO,
  _FLT,
  _FMAFW,
  _FMC,
  _FMCF,
  _FMCFO,
  _FMCFOL,
  _FMDFL,
  _FMFW,
  _FMMFL,
  _FMSC,
  _FMSCF,
  _FMV,
  _FO,
  _Fo,
  _FOi,
  _For,
  _FOSFC,
  _FOTVC,
  _FPo,
  _Fr,
  _FRDTC,
  _FS,
  _FSC,
  _FSCi,
  _FSI,
  _FSi,
  _FSO,
  _FSOL,
  _FSon,
  _FSont,
  _FSoo,
  _FSor,
  _FSV,
  _FTAC,
  _FTFC,
  _FTI,
  _FTor,
  _FV,
  _FVr,
  _FW,
  _FWo,
  _G,
  _GB,
  _GC,
  _GCACF,
  _GCB,
  _GCC,
  _GCCC,
  _GCCe,
  _GCCF,
  _GCCFO,
  _GCCFOL,
  _GCCr,
  _GCDC,
  _GCDCL,
  _GCFW,
  _GCO,
  _GCPVCF,
  _GCR,
  _GCr,
  _GCSS,
  _GCV,
  _GDSI,
  _Ge,
  _GGC,
  _GGSC,
  _GGSCL,
  _GHC,
  _GHCS,
  _GHDC,
  _GHDCL,
  _GL,
  _GLC,
  _GLCF,
  _GLCSO,
  _GLD,
  _GLDFL,
  _GLE,
  _GLEL,
  _GLI,
  _GLJD,
  _GLL,
  _GLMC,
  _GLMFL,
  _GLO,
  _GLS,
  _GLSCSO,
  _GLSS,
  _GLV,
  _GLW,
  _GMAFW,
  _GMC,
  _GMFW,
  _GMLL,
  _GMS,
  _GMSe,
  _GMSO,
  _GMV,
  _GNC,
  _GNDS,
  _GNSS,
  _GO,
  _GPL,
  _GPLe,
  _GPS,
  _GPSe,
  _GPSO,
  _GPSS,
  _Gra,
  _GRC,
  _Gri,
  _Gro,
  _GRr,
  _GSC,
  _GSFS,
  _GSL,
  _GSr,
  _GSro,
  _GSut,
  _GTBO,
  _GV,
  _GWO,
  _h,
  _HAFW,
  _HBO,
  _HC,
  _HCe,
  _HCi,
  _He,
  _HFSC,
  _HFSCL,
  _HFW,
  _HI,
  _HMAFW,
  _HMC,
  _HMCILC,
  _HMCS,
  _HMDFL,
  _HMFL,
  _HMFW,
  _HMMFL,
  _HMRILC,
  _HMRS,
  _HMSC,
  _HMV,
  _hO,
  _HP,
  _hQ,
  _HS,
  _HSe,
  _HTA,
  _HTV,
  _HV,
  _I,
  _IC,
  _Ic,
  _ICns,
  _Ide,
  _IDO,
  _IDV,
  _IF,
  _IH,
  _IILO,
  _IIS,
  _IIT,
  _IL,
  _ILC,
  _ILCt,
  _Ima,
  _IMn,
  _IMnc,
  _IO,
  _IPD,
  _IPL,
  _IPn,
  _IPnt,
  _IS,
  _ISF,
  _ISm,
  _IST,
  _IVn,
  _IVnn,
  _IVWUC,
  _JD,
  _JS,
  _KPIAVCF,
  _KPIC,
  _KPICF,
  _KPICFO,
  _KPICFOL,
  _KPICVCF,
  _KPIFW,
  _KPIO,
  _KPIPBCF,
  _KPIPVCF,
  _KPISC,
  _KPISO,
  _KPIV,
  _KPIVLO,
  _KPIVSL,
  _L,
  _LA,
  _La,
  _Lab,
  _Lay,
  _LB,
  _LCA,
  _LCa,
  _LCab,
  _LCabe,
  _LCAFW,
  _LCAL,
  _LCAO,
  _LCAOL,
  _LCay,
  _LCC,
  _LCDO,
  _LCDSS,
  _LCFW,
  _LCi,
  _LCLSS,
  _LCMSS,
  _LCSAO,
  _LCSC,
  _LCSO,
  _LCSS,
  _LCV,
  _LD,
  _LDL,
  _LE,
  _Le,
  _Lef,
  _LFC,
  _LFT,
  _LI,
  _Li,
  _LIi,
  _Lis,
  _LL,
  _LLa,
  _LMV,
  _LO,
  _Lo,
  _LOeg,
  _LS,
  _LSADO,
  _LSC,
  _LSS,
  _LSSi,
  _LT,
  _LTDSC,
  _LUT,
  _LV,
  _LVa,
  _LVi,
  _LW,
  _Ma,
  _MAF,
  _Max,
  _MC,
  _MCa,
  _MCC,
  _MDC,
  _MDCi,
  _MDCL,
  _MDLS,
  _MDSP,
  _MDSPa,
  _MDV,
  _Mea,
  _MF,
  _MFI,
  _MFLe,
  _MG,
  _MHCS,
  _Mi,
  _Min,
  _ML,
  _MLT,
  _MLTa,
  _MLV,
  _MM,
  _MMa,
  _MMC,
  _MNa,
  _MO,
  _Mo,
  _MP,
  _MS,
  _MSa,
  _MSar,
  _MSark,
  _MSL,
  _MSO,
  _MSo,
  _MSS,
  _MV,
  _MVa,
  _MVC,
  _MVi,
  _MVR,
  _MZM,
  _N,
  _NAF,
  _NAO,
  _Nar,
  _NBC,
  _NC,
  _NDF,
  _NDFC,
  _NDS,
  _NDV,
  _NEDDF,
  _NEF,
  _NFC,
  _NFCu,
  _NFe,
  _NMF,
  _NO,
  _No,
  _NOa,
  _NRF,
  _NRFV,
  _NRV,
  _NS,
  _NSC,
  _NSu,
  _NVC,
  _NVCe,
  _NVFC,
  _O,
  _OCHV,
  _OCt,
  _OK,
  _Or,
  _Ord,
  _OV,
  _Ov,
  _OVPW,
  _P,
  _Pad,
  _PAe,
  _PAl,
  _Par,
  _Para,
  _Patt,
  _PB,
  _PBC,
  _PBCo,
  _PBO,
  _PBr,
  _PC,
  _PCa,
  _PCAFW,
  _PCar,
  _PCara,
  _PCC,
  _PCFW,
  _PCI,
  _PCL,
  _PCo,
  _PCSC,
  _PCSO,
  _PCV,
  _PD,
  _PDa,
  _PDDC,
  _PDFC,
  _PDL,
  _PDTPC,
  _Per,
  _PFe,
  _PFO,
  _PFSO,
  _PFSOL,
  _PH,
  _PHCL,
  _PIre,
  _PL,
  _Pla,
  _PLC,
  _PLCa,
  _PLF,
  _PLo,
  _PMa,
  _PMFL,
  _PN,
  _PNa,
  _POa,
  _POl,
  _POP,
  _POPC,
  _Pos,
  _PRe,
  _PRO,
  _PS,
  _PSa,
  _PSap,
  _PSC,
  _PSO,
  _PSS,
  _PSV,
  _PT,
  _PTAC,
  _PTAFW,
  _PTC,
  _PTCCF,
  _PTCF,
  _PTCFO,
  _PTCFOL,
  _PTCFS,
  _PTCFSL,
  _PTD,
  _PTDC,
  _PTDL,
  _PTDPO,
  _PTDPOL,
  _PTDPT,
  _PTFC,
  _PTFCSO,
  _PTFCSOL,
  _PTFCST,
  _PTFO,
  _PTFOi,
  _PTFOL,
  _PTFSO,
  _PTFSOL,
  _PTFW,
  _PTG,
  _PTO,
  _PTOi,
  _PTOiv,
  _PTPRO,
  _PTRLO,
  _PTSB,
  _PTSC,
  _PTTO,
  _PTV,
  _PVCl,
  _PVDT,
  _PVe,
  _PVFC,
  _PVFW,
  _PVFWl,
  _PVILC,
  _PVl,
  _PVO,
  _PVP,
  _PVPL,
  _PVR,
  _PVr,
  _PVSC,
  _PVT,
  _PVTQS,
  _PYADO,
  _PYALO,
  _QBIS,
  _QEM,
  _QEO,
  _R,
  _Ra,
  _RAC,
  _RACO,
  _RADO,
  _RAo,
  _RC,
  _RCAFW,
  _RCASS,
  _RCC,
  _RCCFL,
  _RCCFLa,
  _RCFW,
  _RCSC,
  _RCSS,
  _RCV,
  _RCVFL,
  _RD,
  _RDC,
  _RDF,
  _RDT,
  _RDTCDO,
  _RDTe,
  _RDV,
  _Reg,
  _Rel,
  _RELT,
  _RFNS,
  _RHS,
  _RI,
  _Ri,
  _RIo,
  _RL,
  _RLCLC,
  _RLDC,
  _RLDDC,
  _RLe,
  _RLL,
  _RLLC,
  _RLO,
  _RLo,
  _RLOo,
  _RLPT,
  _RLPTK,
  _RLSC,
  _RLSDC,
  _RLVLC,
  _RM,
  _RMa,
  _RMV,
  _RMVa,
  _RO,
  _Ro,
  _Row,
  _Row_,
  _RPel,
  _RR,
  _RRe,
  _RSes,
  _RSesu,
  _RSL,
  _RSO,
  _RSo,
  _RSow,
  _RTi,
  _RTO,
  _S,
  _SAA,
  _SAO,
  _SAo,
  _SAOe,
  _SAPB,
  _SAt,
  _SAU,
  _SAUL,
  _SAUR,
  _SAURL,
  _SB,
  _SBe,
  _SBL,
  _SBLC,
  _SBLCSO,
  _SBLPCSO,
  _SBM,
  _SBO,
  _SBS,
  _SBT,
  _SC,
  _Sca,
  _SCc,
  _SCDO,
  _SCe,
  _Sce,
  _SCel,
  _SCF,
  _SCIILO,
  _SCL,
  _SCLC,
  _SCLh,
  _SCLL,
  _SCM,
  _SCn,
  _SCO,
  _SCo,
  _Sco,
  _Scop,
  _SCou,
  _SCSO,
  _SCT,
  _SCta,
  _SCte,
  _SCtr,
  _SCty,
  _SD,
  _SDAFW,
  _SDC,
  _SDCC,
  _SDe,
  _SDFW,
  _SDhe,
  _SDL,
  _SDLh,
  _SDo,
  _SDSC,
  _SDSJ,
  _SDSJR,
  _SDSJRt,
  _SDt,
  _SDV,
  _SDVt,
  _SE,
  _Sea,
  _SECO,
  _Ser,
  _SERR,
  _SERRL,
  _Set,
  _SF,
  _SFC,
  _SFCt,
  _SFDS,
  _SFel,
  _SFG,
  _SFGL,
  _SFI,
  _SFIt,
  _SFLt,
  _SFO,
  _SFS,
  _SFSSO,
  _SFT,
  _SFt,
  _SFUSO,
  _Sh,
  _Sha,
  _Si,
  _SIe,
  _SIer,
  _SIh,
  _SIL,
  _SILe,
  _SIV,
  _Siz,
  _SJI,
  _SKF,
  _SL,
  _Sl,
  _SLC,
  _SLEMO,
  _SLL,
  _SLOi,
  _SLt,
  _SM,
  _SMAP,
  _SMDFL,
  _SMLC,
  _SMO,
  _SMS,
  _SMV,
  _SNA,
  _SO,
  _So,
  _SOe,
  _SOi,
  _SOo,
  _SOpt,
  _SOt,
  _SOu,
  _Sou,
  _Sour,
  _Sp,
  _Spa,
  _SPBC,
  _SPC,
  _SPCAFW,
  _SPD,
  _SPFW,
  _SPL,
  _SPLC,
  _SPN,
  _SPO,
  _SPo,
  _SPS,
  _SPSC,
  _SPt,
  _SPtr,
  _SPUFW,
  _SPV,
  _SSB,
  _SSc,
  _SSCI,
  _SSDCL,
  _SSe,
  _SSec,
  _SSF,
  _SSFSC,
  _SSt,
  _SSTVC,
  _SSy,
  _St,
  _Sta,
  _STAF,
  _STB,
  _STBI,
  _STBL,
  _STer,
  _STL,
  _STo,
  _Sto,
  _STT,
  _STt,
  _Sty,
  _Su,
  _SUC,
  _SUCR,
  _SVe,
  _SVec,
  _SVFC,
  _SVO,
  _SVp,
  _SVSC,
  _SVSCh,
  _SVta,
  _SVtar,
  _SVtat,
  _SVWUC,
  _SW,
  _SYADO,
  _SYALO,
  _Sym,
  _T,
  _TA,
  _Ta,
  _TACDO,
  _TACo,
  _TAex,
  _TAF,
  _TAFW,
  _TAO,
  _TAOL,
  _TAOo,
  _TAOr,
  _TAot,
  _TAr,
  _Tar,
  _TB,
  _TBC,
  _TBF,
  _TBFP,
  _TBIO,
  _TBLo,
  _TBM,
  _TBMC,
  _TBMO,
  _TBO,
  _TBR,
  _TBRC,
  _TBV,
  _TC,
  _TCa,
  _TCCF,
  _TCF,
  _TCFe,
  _TCFO,
  _TCFOL,
  _TCISC,
  _TCISCa,
  _TCPO,
  _TCS,
  _TCSa,
  _TEF,
  _TF,
  _TFCDO,
  _TFCIC,
  _TFCTC,
  _TFe,
  _TFex,
  _TFIC,
  _TFLC,
  _TFLCC,
  _TFO,
  _TFOa,
  _TFOL,
  _TFURLC,
  _TFW,
  _TG,
  _TGr,
  _TGS,
  _Thi,
  _Ti,
  _TIe,
  _TIL,
  _Tim,
  _TIoo,
  _Tit,
  _TIV,
  _TIVa,
  _TIVL,
  _TLO,
  _TMAFW,
  _TMC,
  _TMDFL,
  _TMFW,
  _TMGILC,
  _TMMFL,
  _TMS,
  _TMSC,
  _TMV,
  _TO,
  _To,
  _To_,
  _TOa,
  _TOo,
  _TOot,
  _Top_,
  _TOr,
  _TPFO,
  _TPRO,
  _Tr,
  _TRCF,
  _TRDDF,
  _TRF,
  _TRFV,
  _TSA,
  _TSBO,
  _TSC,
  _TSE,
  _TSh,
  _TSO,
  _TST,
  _TSTe,
  _TSTL,
  _TT,
  _TTO,
  _TTOL,
  _TTOr,
  _TTT,
  _TUFL,
  _TUFW,
  _TV,
  _TVa,
  _TVab,
  _TVar,
  _TVarg,
  _TVC,
  _TVD,
  _TVO,
  _TVo,
  _TW,
  _UAp,
  _UAR,
  _UARp,
  _UB,
  _UBn,
  _UC,
  _UD,
  _UDR,
  _UDRp,
  _UF,
  _UFL,
  _UI,
  _Un,
  _UNC,
  _UOr,
  _UPBC,
  _Ur,
  _URLO,
  _URLS,
  _USpd,
  _UT,
  _UTR,
  _UTRp,
  _UV,
  _UVC,
  _V,
  _VA,
  _Va,
  _VAe,
  _VASO,
  _VCA,
  _VCAD,
  _VCAL,
  _VCAO,
  _VCAOL,
  _VCAT,
  _VCS,
  _VD,
  _VFC,
  _VFMV,
  _VHO,
  _VI,
  _Vi,
  _VIi,
  _VIO,
  _Vis,
  _Visu,
  _VLC,
  _VLi,
  _VLO,
  _VLOi,
  _VMO,
  _VN,
  _vn,
  _VO,
  _VOV,
  _VP,
  _VPe,
  _VPi,
  _VPO,
  _VR,
  _VRO,
  _VSa,
  _VSis,
  _VSLO,
  _VTA,
  _VTLO,
  _VWU,
  _VWUO,
  _WC,
  _WCAFW,
  _WCAFWo,
  _WCC,
  _WCCC,
  _WCCCo,
  _WCDFL,
  _WCFW,
  _WCFWo,
  _WCGCC,
  _WCMFL,
  _WCO,
  _WCOo,
  _WCSC,
  _WCSCo,
  _WCV,
  _We,
  _Wei,
  _Wi,
  _WIPS,
  _WIRS,
  _WO,
  _WOo,
  _WP,
  _WS,
  _WSe,
  _WSo,
  _WV,
  _XA,
  _XADO,
  _XAL,
  _XALO,
  _YA,
  _YADO,
  _YAL,
  _YALO,
  _YAO,
  Expression,
  n0,
  ResourcePermissionList,
  SensitiveString,
  SensitiveTimestamp,
  TagList,
} from "./schemas_0";
import {
  ColumnIdentifier,
  CustomActionNavigationOperation,
  CustomActionSetParametersOperation,
  CustomActionURLOperation,
  DateTimeDefaultValueList,
  DecimalDefaultValueList,
  IntegerDefaultValueList,
  SheetImageList,
  StringDefaultValueList,
} from "./schemas_5_Describe";
import { DataSetConfigurationList } from "./schemas_30_Template";
import { AnalysisErrorList, DashboardErrorList } from "./schemas_31_Describe";
import { SnapshotFileList, SnapshotS3DestinationConfiguration } from "./schemas_36_Snapshot";
import { TemplateErrorList } from "./schemas_58_Describe";
import { SensitiveStringList } from "./schemas_85_Dashboard";
import { SessionTagList } from "./schemas_91_Set";
import { LinkSharingConfiguration } from "./schemas_101_Dashboard";

/* eslint no-var: 0 */

export var CalculatedFieldExpression = sim(n0, _CFE, 0, 8);
export var FieldValue = sim(n0, _FV, 0, 8);
export var NullString = sim(n0, _NS, 0, 8);
export var Prefix = sim(n0, _P, 0, 8);
export var SensitiveDouble = sim(n0, _SD, 1, 8);
export var SensitiveLong = sim(n0, _SL, 1, 8);
export var Suffix = sim(n0, _S, 0, 8);
export var AdHocFilteringOption = struct(n0, _AHFO, 0, [_ASv], [0]);
export var AggregationFunction = struct(
  n0,
  _AFg,
  0,
  [_NAF, _CAF, _DAF, _AAF],
  [() => NumericalAggregationFunction, 0, 0, () => AttributeAggregationFunction]
);
export var AggregationSortConfiguration = struct(
  n0,
  _ASC,
  0,
  [_C, _SDo, _AFg],
  [() => ColumnIdentifier, 0, () => AggregationFunction]
);
export var AllSheetsFilterScopeConfiguration = struct(n0, _ASFSC, 0, [], []);
export var AnalysisDefaults = struct(n0, _AD, 0, [_DNSC], [() => DefaultNewSheetConfiguration]);
export var AnalysisDefinition = struct(
  n0,
  _ADn,
  0,
  [_DSID, _Sh, _CF, _PD, _FG, _CC, _AD, _O, _QEO, _SF],
  [
    () => DataSetIdentifierDeclarationList,
    () => SheetDefinitionList,
    [() => CalculatedFields, 0],
    [() => ParameterDeclarationList, 0],
    [() => FilterGroupList, 0],
    [() => ColumnConfigurationList, 0],
    () => AnalysisDefaults,
    () => AssetOptions,
    () => QueryExecutionOptions,
    () => StaticFileList,
  ]
);
export var AnalysisSourceEntity = struct(n0, _ASE, 0, [_STo], [() => AnalysisSourceTemplate]);
export var AnalysisSourceTemplate = struct(n0, _AST, 0, [_DSR, _Ar], [() => DataSetReferenceList, 0]);
export var AnchorDateConfiguration = struct(n0, _ADC, 0, [_AO, _PN], [0, 0]);
export var ArcAxisConfiguration = struct(n0, _AAC, 0, [_R, _RR], [() => ArcAxisDisplayRange, 1]);
export var ArcAxisDisplayRange = struct(n0, _AADR, 0, [_Mi, _Ma], [1, 1]);
export var ArcConfiguration = struct(n0, _ACr, 0, [_AA, _ATr], [1, 0]);
export var ArcOptions = struct(n0, _AOr, 0, [_ATr], [0]);
export var AssetOptions = struct(
  n0,
  _AOs,
  0,
  [_Ti, _WS, _QBIS, _EDSA, _CAD],
  [0, 0, 0, 64 | 0, () => VisualCustomActionDefaults]
);
export var AttributeAggregationFunction = struct(n0, _AAF, 0, [_SAA, _VFMV], [0, 0]);
export var AxisDataOptions = struct(n0, _ADO, 0, [_NAO, _DAO], [() => NumericAxisOptions, () => DateAxisOptions]);
export var AxisDisplayDataDrivenRange = struct(n0, _ADDDR, 0, [], []);
export var AxisDisplayMinMaxRange = struct(n0, _ADMMR, 0, [_Min, _Max], [1, 1]);
export var AxisDisplayOptions = struct(
  n0,
  _ADOx,
  0,
  [_TLO, _ALV, _GLV, _DO, _SO, _AOx],
  [() => AxisTickLabelOptions, 0, 0, () => AxisDataOptions, () => ScrollBarOptions, 0]
);
export var AxisDisplayRange = struct(
  n0,
  _ADR,
  0,
  [_MM, _DD],
  [() => AxisDisplayMinMaxRange, () => AxisDisplayDataDrivenRange]
);
export var AxisLabelOptions = struct(
  n0,
  _ALO,
  0,
  [_FCo, _CL, _ATpp],
  [() => FontConfiguration, 0, () => AxisLabelReferenceOptions]
);
export var AxisLabelReferenceOptions = struct(n0, _ALRO, 0, [_FIi, _C], [0, () => ColumnIdentifier]);
export var AxisLinearScale = struct(n0, _ALS, 0, [_SC, _SSt], [1, 1]);
export var AxisLogarithmicScale = struct(n0, _ALSx, 0, [_Ba], [1]);
export var AxisScale = struct(n0, _ASx, 0, [_L, _Lo], [() => AxisLinearScale, () => AxisLogarithmicScale]);
export var AxisTickLabelOptions = struct(n0, _ATLO, 0, [_LO, _RAo], [() => LabelOptions, 1]);
export var BarChartAggregatedFieldWells = struct(
  n0,
  _BCAFW,
  0,
  [_Ca, _Va, _Co, _SM],
  [() => DimensionFieldList, () => MeasureFieldList, () => DimensionFieldList, () => SmallMultiplesDimensionFieldList]
);
export var BarChartConfiguration = struct(
  n0,
  _BCC,
  0,
  [_FW, _SCo, _Or, _BA, _VP, _SMO, _CA, _CLO, _VA, _VLO, _CLOo, _Le, _DL, _To, _RL, _CADo, _I],
  [
    () => BarChartFieldWells,
    () => BarChartSortConfiguration,
    0,
    0,
    () => VisualPalette,
    () => SmallMultiplesOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => ChartAxisLabelOptions,
    () => LegendOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => ReferenceLineList,
    () => ContributionAnalysisDefaultList,
    () => VisualInteractionOptions,
  ]
);
export var BarChartFieldWells = struct(n0, _BCFW, 0, [_BCAFW], [() => BarChartAggregatedFieldWells]);
export var BarChartSortConfiguration = struct(
  n0,
  _BCSC,
  0,
  [_CS, _CIL, _CSo, _CILo, _SMS, _SMLC],
  [
    () => FieldSortOptionsList,
    () => ItemsLimitConfiguration,
    () => FieldSortOptionsList,
    () => ItemsLimitConfiguration,
    () => FieldSortOptionsList,
    () => ItemsLimitConfiguration,
  ]
);
export var BarChartVisual = struct(
  n0,
  _BCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => BarChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var BinCountOptions = struct(n0, _BCO, 0, [_V], [1]);
export var BinWidthOptions = struct(n0, _BWO, 0, [_V, _BCL], [1, 1]);
export var BodySectionConfiguration = struct(
  n0,
  _BSC,
  0,
  [_SIe, _Con, _Sty, _PBC, _RC],
  [
    0,
    () => BodySectionContent,
    () => SectionStyle,
    () => SectionPageBreakConfiguration,
    () => BodySectionRepeatConfiguration,
  ]
);
export var BodySectionContent = struct(n0, _BSCo, 0, [_La], [() => SectionLayoutConfiguration]);
export var BodySectionDynamicCategoryDimensionConfiguration = struct(
  n0,
  _BSDCDC,
  0,
  [_C, _Li, _SBM],
  [() => ColumnIdentifier, 1, () => BodySectionDynamicDimensionSortConfigurationList]
);
export var BodySectionDynamicNumericDimensionConfiguration = struct(
  n0,
  _BSDNDC,
  0,
  [_C, _Li, _SBM],
  [() => ColumnIdentifier, 1, () => BodySectionDynamicDimensionSortConfigurationList]
);
export var BodySectionRepeatConfiguration = struct(
  n0,
  _BSRC,
  0,
  [_DC, _PBC, _NRV],
  [() => BodySectionRepeatDimensionConfigurationList, () => BodySectionRepeatPageBreakConfiguration, 64 | 0]
);
export var BodySectionRepeatDimensionConfiguration = struct(
  n0,
  _BSRDC,
  0,
  [_DCDC, _DNDC],
  [() => BodySectionDynamicCategoryDimensionConfiguration, () => BodySectionDynamicNumericDimensionConfiguration]
);
export var BodySectionRepeatPageBreakConfiguration = struct(n0, _BSRPBC, 0, [_Af], [() => SectionAfterPageBreak]);
export var BoxPlotAggregatedFieldWells = struct(
  n0,
  _BPAFW,
  0,
  [_GB, _Va],
  [() => BoxPlotDimensionFieldList, () => BoxPlotMeasureFieldList]
);
export var BoxPlotChartConfiguration = struct(
  n0,
  _BPCC,
  0,
  [_FW, _SCo, _BPO, _CA, _CLO, _PYADO, _PYALO, _Le, _To, _RL, _VP, _I],
  [
    () => BoxPlotFieldWells,
    () => BoxPlotSortConfiguration,
    () => BoxPlotOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => LegendOptions,
    () => TooltipOptions,
    () => ReferenceLineList,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var BoxPlotFieldWells = struct(n0, _BPFW, 0, [_BPAFW], [() => BoxPlotAggregatedFieldWells]);
export var BoxPlotOptions = struct(n0, _BPO, 0, [_SOt, _OV, _ADPV], [() => BoxPlotStyleOptions, 0, 0]);
export var BoxPlotSortConfiguration = struct(
  n0,
  _BPSC,
  0,
  [_CS, _PC],
  [() => FieldSortOptionsList, () => PaginationConfiguration]
);
export var BoxPlotStyleOptions = struct(n0, _BPSO, 0, [_FS], [0]);
export var BoxPlotVisual = struct(
  n0,
  _BPV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => BoxPlotChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var CalculatedField = struct(n0, _CFa, 0, [_DSIatae, _N, _E], [0, 0, [() => CalculatedFieldExpression, 0]]);
export var CalculatedMeasureField = struct(n0, _CMF, 0, [_FIi, _E], [0, [() => Expression, 0]]);
export var CascadingControlConfiguration = struct(n0, _CCC, 0, [_SCou], [() => CascadingControlSourceList]);
export var CascadingControlSource = struct(n0, _CCS, 0, [_SSCI, _CTM], [0, () => ColumnIdentifier]);
export var CategoricalDimensionField = struct(
  n0,
  _CDF,
  0,
  [_FIi, _C, _HI, _FCor],
  [0, () => ColumnIdentifier, 0, [() => StringFormatConfiguration, 0]]
);
export var CategoricalMeasureField = struct(
  n0,
  _CMFa,
  0,
  [_FIi, _C, _AFg, _FCor],
  [0, () => ColumnIdentifier, 0, [() => StringFormatConfiguration, 0]]
);
export var CategoryDrillDownFilter = struct(n0, _CDDF, 0, [_C, _CV], [() => ColumnIdentifier, 64 | 0]);
export var CategoryFilter = struct(
  n0,
  _CFat,
  0,
  [_FIil, _C, _Conf, _DFCC],
  [0, () => ColumnIdentifier, () => CategoryFilterConfiguration, () => DefaultFilterControlConfiguration]
);
export var CategoryFilterConfiguration = struct(
  n0,
  _CFC,
  0,
  [_FLC, _CFLC, _CFCu],
  [() => FilterListConfiguration, () => CustomFilterListConfiguration, () => CustomFilterConfiguration]
);
export var CategoryInnerFilter = struct(
  n0,
  _CIF,
  0,
  [_C, _Conf, _DFCC],
  [() => ColumnIdentifier, () => CategoryFilterConfiguration, () => DefaultFilterControlConfiguration]
);
export var ChartAxisLabelOptions = struct(n0, _CALO, 0, [_Vi, _SIV, _ALO], [0, 0, () => AxisLabelOptionsList]);
export var ClusterMarker = struct(n0, _CM, 0, [_SCM], [() => SimpleClusterMarker]);
export var ClusterMarkerConfiguration = struct(n0, _CMC, 0, [_CM], [() => ClusterMarker]);
export var ColorScale = struct(n0, _CSol, 0, [_Co, _CFT, _NVC], [() => ColorScaleColorList, 0, () => DataColor]);
export var ColorsConfiguration = struct(n0, _CCol, 0, [_CCu], [[() => CustomColorsList, 0]]);
export var ColumnConfiguration = struct(
  n0,
  _CColu,
  0,
  [_C, _FCor, _Ro, _CCol],
  [() => ColumnIdentifier, [() => FormatConfiguration, 0], 0, [() => ColorsConfiguration, 0]]
);
export var ColumnHierarchy = struct(
  n0,
  _CHo,
  0,
  [_EH, _DTH, _PH],
  [() => ExplicitHierarchy, () => DateTimeHierarchy, () => PredefinedHierarchy]
);
export var ColumnSort = struct(
  n0,
  _CSolum,
  0,
  [_SB, _Dir, _AFg],
  [() => ColumnIdentifier, 0, () => AggregationFunction]
);
export var ColumnTooltipItem = struct(
  n0,
  _CTI,
  0,
  [_C, _Lab, _Vi, _A, _TT],
  [() => ColumnIdentifier, 0, 0, () => AggregationFunction, 0]
);
export var ComboChartAggregatedFieldWells = struct(
  n0,
  _CCAFW,
  0,
  [_Ca, _BV, _Co, _LV],
  [() => DimensionFieldList, () => MeasureFieldList, () => DimensionFieldList, () => MeasureFieldList]
);
export var ComboChartConfiguration = struct(
  n0,
  _CCCo,
  0,
  [_FW, _SCo, _BA, _CA, _CLO, _PYADO, _PYALO, _SYADO, _SYALO, _SAO, _CLOo, _Le, _BDL, _LDL, _To, _RL, _VP, _I],
  [
    () => ComboChartFieldWells,
    () => ComboChartSortConfiguration,
    0,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => SingleAxisOptions,
    () => ChartAxisLabelOptions,
    () => LegendOptions,
    () => DataLabelOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => ReferenceLineList,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var ComboChartFieldWells = struct(n0, _CCFW, 0, [_CCAFW], [() => ComboChartAggregatedFieldWells]);
export var ComboChartSortConfiguration = struct(
  n0,
  _CCSC,
  0,
  [_CS, _CIL, _CSo, _CILo],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration, () => FieldSortOptionsList, () => ItemsLimitConfiguration]
);
export var ComboChartVisual = struct(
  n0,
  _CCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => ComboChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var ComparisonConfiguration = struct(n0, _CCom, 0, [_CMo, _CFo], [0, () => ComparisonFormatConfiguration]);
export var ComparisonFormatConfiguration = struct(
  n0,
  _CFCo,
  0,
  [_NDFC, _PDFC],
  [() => NumberDisplayFormatConfiguration, () => PercentageDisplayFormatConfiguration]
);
export var Computation = struct(
  n0,
  _Com,
  0,
  [_TBR, _TBM, _TAot, _MMa, _MC, _POP, _PTD, _GRr, _UV, _For],
  [
    () => TopBottomRankedComputation,
    () => TopBottomMoversComputation,
    () => TotalAggregationComputation,
    () => MaximumMinimumComputation,
    () => MetricComparisonComputation,
    () => PeriodOverPeriodComputation,
    () => PeriodToDateComputation,
    () => GrowthRateComputation,
    () => UniqueValuesComputation,
    () => ForecastComputation,
  ]
);
export var ConditionalFormattingColor = struct(
  n0,
  _CFCon,
  0,
  [_So, _G],
  [
    [() => ConditionalFormattingSolidColor, 0],
    [() => ConditionalFormattingGradientColor, 0],
  ]
);
export var ConditionalFormattingCustomIconCondition = struct(
  n0,
  _CFCIC,
  0,
  [_E, _IO, _Col, _DCi],
  [
    [() => Expression, 0],
    () => ConditionalFormattingCustomIconOptions,
    0,
    () => ConditionalFormattingIconDisplayConfiguration,
  ]
);
export var ConditionalFormattingCustomIconOptions = struct(n0, _CFCIO, 0, [_Ic, _UI], [0, 0]);
export var ConditionalFormattingGradientColor = struct(
  n0,
  _CFGC,
  0,
  [_E, _Col],
  [[() => Expression, 0], () => GradientColor]
);
export var ConditionalFormattingIcon = struct(
  n0,
  _CFI,
  0,
  [_IS, _CCus],
  [
    [() => ConditionalFormattingIconSet, 0],
    [() => ConditionalFormattingCustomIconCondition, 0],
  ]
);
export var ConditionalFormattingIconDisplayConfiguration = struct(n0, _CFIDC, 0, [_IDO], [0]);
export var ConditionalFormattingIconSet = struct(n0, _CFIS, 0, [_E, _IST], [[() => Expression, 0], 0]);
export var ConditionalFormattingSolidColor = struct(n0, _CFSC, 0, [_E, _Col], [[() => Expression, 0], 0]);
export var ContextMenuOption = struct(n0, _CMO, 0, [_ASv], [0]);
export var ContributionAnalysisDefault = struct(n0, _CADon, 0, [_MFI, _CDo], [0, () => ContributorDimensionList]);
export var CreateAnalysisRequest = struct(
  n0,
  _CAR,
  0,
  [_AAI, _AIn, _N, _Par, _Per, _SE, _TA, _Ta, _Def, _VSa, _FAo],
  [
    [0, 1],
    [0, 1],
    0,
    [() => _Parameters, 0],
    () => ResourcePermissionList,
    () => AnalysisSourceEntity,
    0,
    () => TagList,
    [() => AnalysisDefinition, 0],
    () => ValidationStrategy,
    64 | 0,
  ]
);
export var CreateAnalysisResponse = struct(n0, _CARr, 0, [_Ar, _AIn, _CSr, _St, _RI], [0, 0, 0, [1, 32], 0]);
export var CreateDashboardRequest = struct(
  n0,
  _CDR,
  0,
  [_AAI, _DI, _N, _Par, _Per, _SE, _Ta, _VD, _DPO, _TA, _Def, _VSa, _FAo, _LSC, _LE],
  [
    [0, 1],
    [0, 1],
    0,
    [() => _Parameters, 0],
    () => ResourcePermissionList,
    () => DashboardSourceEntity,
    () => TagList,
    0,
    () => DashboardPublishOptions,
    0,
    [() => DashboardVersionDefinition, 0],
    () => ValidationStrategy,
    64 | 0,
    () => LinkSharingConfiguration,
    64 | 0,
  ]
);
export var CreateDashboardResponse = struct(n0, _CDRr, 0, [_Ar, _VAe, _DI, _CSr, _St, _RI], [0, 0, 0, 0, [1, 32], 0]);
export var CreateTemplateRequest = struct(
  n0,
  _CTR,
  0,
  [_AAI, _TIe, _N, _Per, _SE, _Ta, _VD, _Def, _VSa],
  [
    [0, 1],
    [0, 1],
    0,
    () => ResourcePermissionList,
    () => TemplateSourceEntity,
    () => TagList,
    0,
    [() => TemplateVersionDefinition, 0],
    () => ValidationStrategy,
  ]
);
export var CreateTemplateResponse = struct(n0, _CTRr, 0, [_Ar, _VAe, _TIe, _CSr, _St, _RI], [0, 0, 0, 0, [1, 32], 0]);
export var CurrencyDisplayFormatConfiguration = struct(
  n0,
  _CDFC,
  0,
  [_P, _S, _SCe, _Sym, _DPC, _NSu, _NVCe, _NVFC],
  [
    [() => Prefix, 0],
    [() => Suffix, 0],
    () => NumericSeparatorConfiguration,
    0,
    () => DecimalPlacesConfiguration,
    0,
    () => NegativeValueConfiguration,
    [() => NullValueFormatConfiguration, 0],
  ]
);
export var CustomActionFilterOperation = struct(
  n0,
  _CAFO,
  0,
  [_SFC, _TVC],
  [() => FilterOperationSelectedFieldsConfiguration, () => FilterOperationTargetVisualsConfiguration]
);
export var CustomColor = struct(n0, _CCust, 0, [_FV, _Col, _SVp], [[() => FieldValue, 0], 0, 0]);
export var CustomContentConfiguration = struct(
  n0,
  _CCCu,
  0,
  [_CU, _CTont, _ISm, _I],
  [0, 0, 0, () => VisualInteractionOptions]
);
export var CustomContentVisual = struct(
  n0,
  _CCVu,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _DSIatae, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => CustomContentConfiguration,
    () => VisualCustomActionList,
    0,
    0,
  ]
);
export var CustomFilterConfiguration = struct(n0, _CFCu, 0, [_MO, _CVa, _SAOe, _PN, _NO], [0, 0, 0, 0, 0]);
export var CustomFilterListConfiguration = struct(n0, _CFLC, 0, [_MO, _CV, _SAOe, _NO], [0, 64 | 0, 0, 0]);
export var CustomNarrativeOptions = struct(n0, _CNO, 0, [_Nar], [0]);
export var DashboardPublishOptions = struct(
  n0,
  _DPO,
  0,
  [_AHFO, _ETCSVO, _SCO, _VPO, _SLEMO, _VMO, _VASO, _EWHFO, _DPDUDO, _DPMLO, _DPTO, _DQAEO, _ESO, _DSSO],
  [
    () => AdHocFilteringOption,
    () => ExportToCSVOption,
    () => SheetControlsOption,
    () => DashboardVisualPublishOptions,
    () => SheetLayoutElementMaximizationOption,
    () => VisualMenuOption,
    () => VisualAxisSortOption,
    () => ExportWithHiddenFieldsOption,
    () => DataPointDrillUpDownOption,
    () => DataPointMenuLabelOption,
    () => DataPointTooltipOption,
    () => DataQAEnabledOption,
    () => ExecutiveSummaryOption,
    () => DataStoriesSharingOption,
  ]
);
export var DashboardSourceEntity = struct(n0, _DSE, 0, [_STo], [() => DashboardSourceTemplate]);
export var DashboardSourceTemplate = struct(n0, _DST, 0, [_DSR, _Ar], [() => DataSetReferenceList, 0]);
export var DashboardVersionDefinition = struct(
  n0,
  _DVD,
  0,
  [_DSID, _Sh, _CF, _PD, _FG, _CC, _AD, _O, _SF],
  [
    () => DataSetIdentifierDeclarationList,
    () => SheetDefinitionList,
    [() => CalculatedFields, 0],
    [() => ParameterDeclarationList, 0],
    [() => FilterGroupList, 0],
    [() => ColumnConfigurationList, 0],
    () => AnalysisDefaults,
    () => AssetOptions,
    () => StaticFileList,
  ]
);
export var DashboardVisualPublishOptions = struct(n0, _DVPO, 0, [_EHFO], [() => ExportHiddenFieldsOption]);
export var DataBarsOptions = struct(n0, _DBO, 0, [_FIi, _PCo, _NC], [0, 0, 0]);
export var DataColor = struct(n0, _DCa, 0, [_Col, _DVat], [0, 1]);
export var DataFieldSeriesItem = struct(
  n0,
  _DFSI,
  0,
  [_FIi, _FV, _AB, _Set],
  [0, () => SensitiveString, 0, () => LineChartSeriesSettings]
);
export var DataLabelOptions = struct(
  n0,
  _DLO,
  0,
  [_Vi, _CLV, _MLV, _DLT, _Pos, _LCa, _LFC, _LCab, _Ov, _TV],
  [0, 0, 0, () => DataLabelTypes, 0, 0, () => FontConfiguration, 0, 0, 0]
);
export var DataLabelType = struct(
  n0,
  _DLTa,
  0,
  [_FLT, _DPLT, _RELT, _MLT, _MLTa],
  [
    () => FieldLabelType,
    () => DataPathLabelType,
    () => RangeEndsLabelType,
    () => MinimumLabelType,
    () => MaximumLabelType,
  ]
);
export var DataPathColor = struct(n0, _DPCa, 0, [_El, _Col, _TG], [() => DataPathValue, 0, 0]);
export var DataPathLabelType = struct(n0, _DPLT, 0, [_FIi, _FV, _Vi], [0, [() => FieldValue, 0], 0]);
export var DataPathSort = struct(n0, _DPS, 0, [_Dir, _SPo], [0, [() => DataPathValueList, 0]]);
export var DataPathType = struct(n0, _DPT, 0, [_PTDPT], [0]);
export var DataPathValue = struct(n0, _DPV, 0, [_FIi, _FV, _DPT], [0, [() => FieldValue, 0], () => DataPathType]);
export var DataPointDrillUpDownOption = struct(n0, _DPDUDO, 0, [_ASv], [0]);
export var DataPointMenuLabelOption = struct(n0, _DPMLO, 0, [_ASv], [0]);
export var DataPointTooltipOption = struct(n0, _DPTO, 0, [_ASv], [0]);
export var DataQAEnabledOption = struct(n0, _DQAEO, 0, [_ASv], [0]);
export var DataSetIdentifierDeclaration = struct(n0, _DSIDa, 0, [_Ide, _DSAat], [0, 0]);
export var DataSetReference = struct(n0, _DSRat, 0, [_DSPa, _DSAat], [0, 0]);
export var DataStoriesSharingOption = struct(n0, _DSSO, 0, [_ASv], [0]);
export var DateAxisOptions = struct(n0, _DAO, 0, [_MDV], [0]);
export var DateDimensionField = struct(
  n0,
  _DDF,
  0,
  [_FIi, _C, _DG, _HI, _FCor],
  [0, () => ColumnIdentifier, 0, 0, [() => DateTimeFormatConfiguration, 0]]
);
export var DateMeasureField = struct(
  n0,
  _DMF,
  0,
  [_FIi, _C, _AFg, _FCor],
  [0, () => ColumnIdentifier, 0, [() => DateTimeFormatConfiguration, 0]]
);
export var DateTimeDefaultValues = struct(
  n0,
  _DTDV,
  0,
  [_DVy, _SVta, _RD],
  [() => DynamicDefaultValue, [() => DateTimeDefaultValueList, 0], [() => RollingDateConfiguration, 0]]
);
export var DateTimeFormatConfiguration = struct(
  n0,
  _DTFC,
  0,
  [_DTF, _NVFC, _NFC],
  [0, [() => NullValueFormatConfiguration, 0], [() => NumericFormatConfiguration, 0]]
);
export var DateTimeHierarchy = struct(n0, _DTH, 0, [_HI, _DDFr], [0, () => DrillDownFilterList]);
export var DateTimeParameter = struct(n0, _DTP, 0, [_N, _Va], [0, [() => SensitiveTimestampList, 0]]);
export var DateTimeParameterDeclaration = struct(
  n0,
  _DTPD,
  0,
  [_N, _DVef, _TG, _VWU, _MDSP],
  [
    0,
    [() => DateTimeDefaultValues, 0],
    0,
    [() => DateTimeValueWhenUnsetConfiguration, 0],
    () => MappedDataSetParameters,
  ]
);
export var DateTimePickerControlDisplayOptions = struct(
  n0,
  _DTPCDO,
  0,
  [_TO, _DTF, _IILO, _HTV, _DIV],
  [() => LabelOptions, 0, () => SheetControlInfoIconLabelOptions, 0, 0]
);
export var DateTimeValueWhenUnsetConfiguration = struct(
  n0,
  _DTVWUC,
  0,
  [_VWUO, _CVus],
  [0, [() => SensitiveTimestamp, 0]]
);
export var DecimalDefaultValues = struct(
  n0,
  _DDV,
  0,
  [_DVy, _SVta],
  [() => DynamicDefaultValue, [() => DecimalDefaultValueList, 0]]
);
export var DecimalParameter = struct(n0, _DPe, 0, [_N, _Va], [0, [() => SensitiveDoubleList, 0]]);
export var DecimalParameterDeclaration = struct(
  n0,
  _DPD,
  0,
  [_PVT, _N, _DVef, _VWU, _MDSP],
  [0, 0, [() => DecimalDefaultValues, 0], [() => DecimalValueWhenUnsetConfiguration, 0], () => MappedDataSetParameters]
);
export var DecimalPlacesConfiguration = struct(n0, _DPC, 0, [_DPec], [1]);
export var DecimalValueWhenUnsetConfiguration = struct(n0, _DVWUC, 0, [_VWUO, _CVus], [0, [() => SensitiveDouble, 0]]);
export var DefaultDateTimePickerControlOptions = struct(
  n0,
  _DDTPCO,
  0,
  [_T, _DOi, _CMom],
  [0, () => DateTimePickerControlDisplayOptions, 0]
);
export var DefaultFilterControlConfiguration = struct(
  n0,
  _DFCC,
  0,
  [_Tit, _COo],
  [0, () => DefaultFilterControlOptions]
);
export var DefaultFilterControlOptions = struct(
  n0,
  _DFCO,
  0,
  [_DDTPO, _DLOe, _DDO, _DTFO, _DTAO, _DSO, _DRDTO],
  [
    () => DefaultDateTimePickerControlOptions,
    () => DefaultFilterListControlOptions,
    () => DefaultFilterDropDownControlOptions,
    () => DefaultTextFieldControlOptions,
    () => DefaultTextAreaControlOptions,
    () => DefaultSliderControlOptions,
    () => DefaultRelativeDateTimeControlOptions,
  ]
);
export var DefaultFilterDropDownControlOptions = struct(
  n0,
  _DFDDCO,
  0,
  [_DOi, _T, _SVe, _CMom],
  [() => DropDownControlDisplayOptions, 0, () => FilterSelectableValues, 0]
);
export var DefaultFilterListControlOptions = struct(
  n0,
  _DFLCO,
  0,
  [_DOi, _T, _SVe],
  [() => ListControlDisplayOptions, 0, () => FilterSelectableValues]
);
export var DefaultFreeFormLayoutConfiguration = struct(n0, _DFFLC, 0, [_CSO], [() => FreeFormLayoutCanvasSizeOptions]);
export var DefaultGridLayoutConfiguration = struct(n0, _DGLC, 0, [_CSO], [() => GridLayoutCanvasSizeOptions]);
export var DefaultInteractiveLayoutConfiguration = struct(
  n0,
  _DILC,
  0,
  [_Gri, _FFr],
  [() => DefaultGridLayoutConfiguration, () => DefaultFreeFormLayoutConfiguration]
);
export var DefaultNewSheetConfiguration = struct(
  n0,
  _DNSC,
  0,
  [_ILC, _PLC, _SCT],
  [() => DefaultInteractiveLayoutConfiguration, () => DefaultPaginatedLayoutConfiguration, 0]
);
export var DefaultPaginatedLayoutConfiguration = struct(
  n0,
  _DPLC,
  0,
  [_SBe],
  [() => DefaultSectionBasedLayoutConfiguration]
);
export var DefaultRelativeDateTimeControlOptions = struct(
  n0,
  _DRDTCO,
  0,
  [_DOi, _CMom],
  [() => RelativeDateTimeControlDisplayOptions, 0]
);
export var DefaultSectionBasedLayoutConfiguration = struct(
  n0,
  _DSBLC,
  0,
  [_CSO],
  [() => SectionBasedLayoutCanvasSizeOptions]
);
export var DefaultSliderControlOptions = struct(
  n0,
  _DSCO,
  0,
  [_DOi, _T, _MV, _MVi, _SSt],
  [() => SliderControlDisplayOptions, 0, 1, 1, 1]
);
export var DefaultTextAreaControlOptions = struct(
  n0,
  _DTACO,
  0,
  [_Del, _DOi],
  [0, () => TextAreaControlDisplayOptions]
);
export var DefaultTextFieldControlOptions = struct(n0, _DTFCO, 0, [_DOi], [() => TextFieldControlDisplayOptions]);
export var DescribeAnalysisDefinitionRequest = struct(
  n0,
  _DADR,
  0,
  [_AAI, _AIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAnalysisDefinitionResponse = struct(
  n0,
  _DADRe,
  0,
  [_AIn, _N, _Er, _RSes, _TA, _Def, _St, _RI],
  [0, 0, () => AnalysisErrorList, 0, 0, [() => AnalysisDefinition, 0], [1, 32], 0]
);
export var DescribeDashboardDefinitionRequest = struct(
  n0,
  _DDDR,
  0,
  [_AAI, _DI, _VN, _ANl],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
    [
      0,
      {
        [_hQ]: _an,
      },
    ],
  ]
);
export var DescribeDashboardDefinitionResponse = struct(
  n0,
  _DDDRe,
  0,
  [_DI, _Er, _N, _RSes, _TA, _Def, _St, _RI, _DPO],
  [
    0,
    () => DashboardErrorList,
    0,
    0,
    0,
    [() => DashboardVersionDefinition, 0],
    [1, 32],
    0,
    () => DashboardPublishOptions,
  ]
);
export var DescribeDashboardSnapshotJobRequest = struct(
  n0,
  _DDSJR,
  0,
  [_AAI, _DI, _SJI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDashboardSnapshotJobResponse = struct(
  n0,
  _DDSJRe,
  0,
  [_AAI, _DI, _SJI, _UC, _SCn, _Ar, _JS, _CT, _LUT, _RI, _St],
  [0, 0, 0, () => SnapshotUserConfigurationRedacted, [() => SnapshotConfiguration, 0], 0, 0, 4, 4, 0, 1]
);
export var DescribeTemplateDefinitionRequest = struct(
  n0,
  _DTDR,
  0,
  [_AAI, _TIe, _VN, _ANl],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
    [
      0,
      {
        [_hQ]: _an,
      },
    ],
  ]
);
export var DescribeTemplateDefinitionResponse = struct(
  n0,
  _DTDRe,
  0,
  [_N, _TIe, _Er, _RSes, _TA, _Def, _St, _RI],
  [0, 0, () => TemplateErrorList, 0, 0, [() => TemplateVersionDefinition, 0], [1, 32], 0]
);
export var DimensionField = struct(
  n0,
  _DFim,
  0,
  [_NDF, _CDF, _DDF],
  [
    [() => NumericalDimensionField, 0],
    [() => CategoricalDimensionField, 0],
    [() => DateDimensionField, 0],
  ]
);
export var DonutCenterOptions = struct(n0, _DCO, 0, [_LVa], [0]);
export var DonutOptions = struct(n0, _DOo, 0, [_AOr, _DCO], [() => ArcOptions, () => DonutCenterOptions]);
export var DrillDownFilter = struct(
  n0,
  _DDFri,
  0,
  [_NEF, _CFat, _TRF],
  [() => NumericEqualityDrillDownFilter, () => CategoryDrillDownFilter, () => TimeRangeDrillDownFilter]
);
export var DropDownControlDisplayOptions = struct(
  n0,
  _DDCDO,
  0,
  [_SAOe, _TO, _IILO],
  [() => ListControlSelectAllOptions, () => LabelOptions, () => SheetControlInfoIconLabelOptions]
);
export var DynamicDefaultValue = struct(
  n0,
  _DDVy,
  0,
  [_UNC, _GNC, _DVC],
  [() => ColumnIdentifier, () => ColumnIdentifier, () => ColumnIdentifier]
);
export var EmptyVisual = struct(n0, _EV, 0, [_VI, _DSIatae, _Ac], [0, 0, () => VisualCustomActionList]);
export var ExcludePeriodConfiguration = struct(n0, _EPC, 0, [_Am, _Gra, _St], [1, 0, 0]);
export var ExecutiveSummaryOption = struct(n0, _ESO, 0, [_ASv], [0]);
export var ExplicitHierarchy = struct(
  n0,
  _EH,
  0,
  [_HI, _Colu, _DDFr],
  [0, () => ExplicitHierarchyColumnList, () => DrillDownFilterList]
);
export var ExportHiddenFieldsOption = struct(n0, _EHFO, 0, [_ASv], [0]);
export var ExportToCSVOption = struct(n0, _ETCSVO, 0, [_ASv], [0]);
export var ExportWithHiddenFieldsOption = struct(n0, _EWHFO, 0, [_ASv], [0]);
export var FieldBasedTooltip = struct(n0, _FBT, 0, [_AV, _TTT, _TF], [0, 0, () => TooltipItemList]);
export var FieldLabelType = struct(n0, _FLT, 0, [_FIi, _Vi], [0, 0]);
export var FieldSeriesItem = struct(n0, _FSI, 0, [_FIi, _AB, _Set], [0, 0, () => LineChartSeriesSettings]);
export var FieldSort = struct(n0, _FSi, 0, [_FIi, _Dir], [0, 0]);
export var FieldSortOptions = struct(n0, _FSO, 0, [_FSi, _CSolum], [() => FieldSort, () => ColumnSort]);
export var FieldTooltipItem = struct(n0, _FTI, 0, [_FIi, _Lab, _Vi, _TT], [0, 0, 0, 0]);
export var FilledMapAggregatedFieldWells = struct(
  n0,
  _FMAFW,
  0,
  [_Ge, _Va],
  [() => FilledMapDimensionFieldList, () => FilledMapMeasureFieldList]
);
export var FilledMapConditionalFormatting = struct(
  n0,
  _FMCF,
  0,
  [_CFO],
  [() => FilledMapConditionalFormattingOptionList]
);
export var FilledMapConditionalFormattingOption = struct(
  n0,
  _FMCFO,
  0,
  [_Sha],
  [() => FilledMapShapeConditionalFormatting]
);
export var FilledMapConfiguration = struct(
  n0,
  _FMC,
  0,
  [_FW, _SCo, _Le, _To, _WO, _MSO, _I],
  [
    () => FilledMapFieldWells,
    () => FilledMapSortConfiguration,
    () => LegendOptions,
    () => TooltipOptions,
    () => GeospatialWindowOptions,
    () => GeospatialMapStyleOptions,
    () => VisualInteractionOptions,
  ]
);
export var FilledMapFieldWells = struct(n0, _FMFW, 0, [_FMAFW], [() => FilledMapAggregatedFieldWells]);
export var FilledMapShapeConditionalFormatting = struct(n0, _FMSCF, 0, [_FIi, _Fo], [0, () => ShapeConditionalFormat]);
export var FilledMapSortConfiguration = struct(n0, _FMSC, 0, [_CS], [() => FieldSortOptionsList]);
export var FilledMapVisual = struct(
  n0,
  _FMV,
  0,
  [_VI, _Tit, _Su, _CCh, _CFon, _CH, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => FilledMapConfiguration,
    () => FilledMapConditionalFormatting,
    () => ColumnHierarchyList,
    () => VisualCustomActionList,
    0,
  ]
);
export var Filter = struct(
  n0,
  _Fil,
  0,
  [_CFat, _NRF, _NEF, _TEF, _TRF, _RDF, _TBF, _NFe],
  [
    () => CategoryFilter,
    () => NumericRangeFilter,
    () => NumericEqualityFilter,
    [() => TimeEqualityFilter, 0],
    [() => TimeRangeFilter, 0],
    () => RelativeDatesFilter,
    () => TopBottomFilter,
    () => NestedFilter,
  ]
);
export var FilterControl = struct(
  n0,
  _FCi,
  0,
  [_DTPa, _Lis, _Dr, _TFe, _TAex, _Sl, _RDT, _CSro],
  [
    () => FilterDateTimePickerControl,
    () => FilterListControl,
    () => FilterDropDownControl,
    () => FilterTextFieldControl,
    () => FilterTextAreaControl,
    () => FilterSliderControl,
    () => FilterRelativeDateTimeControl,
    () => FilterCrossSheetControl,
  ]
);
export var FilterCrossSheetControl = struct(
  n0,
  _FCSC,
  0,
  [_FCI, _SFI, _CCC],
  [0, 0, () => CascadingControlConfiguration]
);
export var FilterDateTimePickerControl = struct(
  n0,
  _FDTPC,
  0,
  [_FCI, _Tit, _SFI, _DOi, _T, _CMom],
  [0, 0, 0, () => DateTimePickerControlDisplayOptions, 0, 0]
);
export var FilterDropDownControl = struct(
  n0,
  _FDDC,
  0,
  [_FCI, _Tit, _SFI, _DOi, _T, _SVe, _CCC, _CMom],
  [
    0,
    0,
    0,
    () => DropDownControlDisplayOptions,
    0,
    () => FilterSelectableValues,
    () => CascadingControlConfiguration,
    0,
  ]
);
export var FilterGroup = struct(
  n0,
  _FGil,
  0,
  [_FGI, _Fi, _SCc, _St, _CDr],
  [0, [() => FilterList, 0], () => FilterScopeConfiguration, 0, 0]
);
export var FilterListConfiguration = struct(n0, _FLC, 0, [_MO, _CV, _SAOe, _NO], [0, 64 | 0, 0, 0]);
export var FilterListControl = struct(
  n0,
  _FLCi,
  0,
  [_FCI, _Tit, _SFI, _DOi, _T, _SVe, _CCC],
  [0, 0, 0, () => ListControlDisplayOptions, 0, () => FilterSelectableValues, () => CascadingControlConfiguration]
);
export var FilterOperationSelectedFieldsConfiguration = struct(
  n0,
  _FOSFC,
  0,
  [_SFel, _SFO, _SCel],
  [64 | 0, 0, () => CustomActionColumnList]
);
export var FilterOperationTargetVisualsConfiguration = struct(
  n0,
  _FOTVC,
  0,
  [_SSTVC],
  [() => SameSheetTargetVisualConfiguration]
);
export var FilterRelativeDateTimeControl = struct(
  n0,
  _FRDTC,
  0,
  [_FCI, _Tit, _SFI, _DOi, _CMom],
  [0, 0, 0, () => RelativeDateTimeControlDisplayOptions, 0]
);
export var FilterScopeConfiguration = struct(
  n0,
  _FSC,
  0,
  [_SSe, _ASl],
  [() => SelectedSheetsFilterScopeConfiguration, () => AllSheetsFilterScopeConfiguration]
);
export var FilterSelectableValues = struct(n0, _FSV, 0, [_Va], [64 | 0]);
export var FilterSliderControl = struct(
  n0,
  _FSCi,
  0,
  [_FCI, _Tit, _SFI, _DOi, _T, _MV, _MVi, _SSt],
  [0, 0, 0, () => SliderControlDisplayOptions, 0, 1, 1, 1]
);
export var FilterTextAreaControl = struct(
  n0,
  _FTAC,
  0,
  [_FCI, _Tit, _SFI, _Del, _DOi],
  [0, 0, 0, 0, () => TextAreaControlDisplayOptions]
);
export var FilterTextFieldControl = struct(
  n0,
  _FTFC,
  0,
  [_FCI, _Tit, _SFI, _DOi],
  [0, 0, 0, () => TextFieldControlDisplayOptions]
);
export var FontConfiguration = struct(
  n0,
  _FCo,
  0,
  [_FSon, _FDo, _FCon, _FWo, _FSont, _FFo],
  [() => FontSize, 0, 0, () => FontWeight, 0, 0]
);
export var FontSize = struct(n0, _FSon, 0, [_Rel, _Ab], [0, 0]);
export var FontWeight = struct(n0, _FWo, 0, [_N], [0]);
export var ForecastComputation = struct(
  n0,
  _FCore,
  0,
  [_CIom, _N, _Tim, _V, _PFe, _PB, _UB, _LB, _PIre, _Sea, _CSV],
  [0, 0, () => DimensionField, () => MeasureField, 1, 1, 1, 1, 1, 0, 1]
);
export var ForecastConfiguration = struct(
  n0,
  _FCorec,
  0,
  [_FPo, _Sce],
  [() => TimeBasedForecastProperties, () => ForecastScenario]
);
export var ForecastScenario = struct(
  n0,
  _FSor,
  0,
  [_WIPS, _WIRS],
  [() => WhatIfPointScenario, () => WhatIfRangeScenario]
);
export var FormatConfiguration = struct(
  n0,
  _FCor,
  0,
  [_SFCt, _NFCu, _DTFC],
  [
    [() => StringFormatConfiguration, 0],
    [() => NumberFormatConfiguration, 0],
    [() => DateTimeFormatConfiguration, 0],
  ]
);
export var FreeFormLayoutCanvasSizeOptions = struct(
  n0,
  _FFLCSO,
  0,
  [_SCSO],
  [() => FreeFormLayoutScreenCanvasSizeOptions]
);
export var FreeFormLayoutConfiguration = struct(
  n0,
  _FFLC,
  0,
  [_Ele, _CSO],
  [() => FreeFromLayoutElementList, () => FreeFormLayoutCanvasSizeOptions]
);
export var FreeFormLayoutElement = struct(
  n0,
  _FFLE,
  0,
  [_EIl, _ET, _XAL, _YAL, _Wi, _He, _Vi, _RRe, _BS, _SBS, _BSa, _LA],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => SheetElementRenderingRuleList,
    () => FreeFormLayoutElementBorderStyle,
    () => FreeFormLayoutElementBorderStyle,
    () => FreeFormLayoutElementBackgroundStyle,
    () => LoadingAnimation,
  ]
);
export var FreeFormLayoutElementBackgroundStyle = struct(n0, _FFLEBS, 0, [_Vi, _Col], [0, 0]);
export var FreeFormLayoutElementBorderStyle = struct(n0, _FFLEBSr, 0, [_Vi, _Col], [0, 0]);
export var FreeFormLayoutScreenCanvasSizeOptions = struct(n0, _FFLSCSO, 0, [_OVPW], [0]);
export var FreeFormSectionLayoutConfiguration = struct(n0, _FFSLC, 0, [_Ele], [() => FreeFromLayoutElementList]);
export var FunnelChartAggregatedFieldWells = struct(
  n0,
  _FCAFW,
  0,
  [_Ca, _Va],
  [() => FunnelChartDimensionFieldList, () => FunnelChartMeasureFieldList]
);
export var FunnelChartConfiguration = struct(
  n0,
  _FCC,
  0,
  [_FW, _SCo, _CLO, _VLO, _To, _DLO, _VP, _I],
  [
    () => FunnelChartFieldWells,
    () => FunnelChartSortConfiguration,
    () => ChartAxisLabelOptions,
    () => ChartAxisLabelOptions,
    () => TooltipOptions,
    () => FunnelChartDataLabelOptions,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var FunnelChartDataLabelOptions = struct(
  n0,
  _FCDLO,
  0,
  [_Vi, _CLV, _MLV, _Pos, _LFC, _LCab, _MDLS],
  [0, 0, 0, 0, () => FontConfiguration, 0, 0]
);
export var FunnelChartFieldWells = struct(n0, _FCFW, 0, [_FCAFW], [() => FunnelChartAggregatedFieldWells]);
export var FunnelChartSortConfiguration = struct(
  n0,
  _FCSCu,
  0,
  [_CS, _CIL],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration]
);
export var FunnelChartVisual = struct(
  n0,
  _FCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => FunnelChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var GaugeChartArcConditionalFormatting = struct(n0, _GCACF, 0, [_FCoreg], [() => ConditionalFormattingColor]);
export var GaugeChartColorConfiguration = struct(n0, _GCCC, 0, [_FCoreg, _BCa], [0, 0]);
export var GaugeChartConditionalFormatting = struct(
  n0,
  _GCCF,
  0,
  [_CFO],
  [() => GaugeChartConditionalFormattingOptionList]
);
export var GaugeChartConditionalFormattingOption = struct(
  n0,
  _GCCFO,
  0,
  [_PVr, _Arc],
  [() => GaugeChartPrimaryValueConditionalFormatting, () => GaugeChartArcConditionalFormatting]
);
export var GaugeChartConfiguration = struct(
  n0,
  _GCC,
  0,
  [_FW, _GCO, _DL, _TOo, _VP, _CColo, _I],
  [
    () => GaugeChartFieldWells,
    () => GaugeChartOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => VisualPalette,
    () => GaugeChartColorConfiguration,
    () => VisualInteractionOptions,
  ]
);
export var GaugeChartFieldWells = struct(n0, _GCFW, 0, [_Va, _TVa], [() => MeasureFieldList, () => MeasureFieldList]);
export var GaugeChartOptions = struct(
  n0,
  _GCO,
  0,
  [_PVDT, _Comp, _AAr, _Arc, _PVFC],
  [0, () => ComparisonConfiguration, () => ArcAxisConfiguration, () => ArcConfiguration, () => FontConfiguration]
);
export var GaugeChartPrimaryValueConditionalFormatting = struct(
  n0,
  _GCPVCF,
  0,
  [_TC, _Ic],
  [() => ConditionalFormattingColor, () => ConditionalFormattingIcon]
);
export var GaugeChartVisual = struct(
  n0,
  _GCV,
  0,
  [_VI, _Tit, _Su, _CCh, _CFon, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => GaugeChartConfiguration,
    () => GaugeChartConditionalFormatting,
    () => VisualCustomActionList,
    0,
  ]
);
export var GeospatialCategoricalColor = struct(
  n0,
  _GCCe,
  0,
  [_CDC, _NDV, _NDS, _DOe],
  [() => GeospatialCategoricalDataColorList, 0, () => GeospatialNullDataSettings, 1]
);
export var GeospatialCategoricalDataColor = struct(n0, _GCDC, 0, [_Col, _DVat], [0, 0]);
export var GeospatialCircleRadius = struct(n0, _GCR, 0, [_Ra], [1]);
export var GeospatialCircleSymbolStyle = struct(
  n0,
  _GCSS,
  0,
  [_FCil, _SCtr, _SW, _CRi],
  [() => GeospatialColor, () => GeospatialColor, () => GeospatialLineWidth, () => GeospatialCircleRadius]
);
export var GeospatialColor = struct(
  n0,
  _GC,
  0,
  [_So, _G, _Cat],
  [() => GeospatialSolidColor, () => GeospatialGradientColor, () => GeospatialCategoricalColor]
);
export var GeospatialCoordinateBounds = struct(n0, _GCB, 0, [_No, _Sou, _We, _Ea], [1, 1, 1, 1]);
export var GeospatialDataSourceItem = struct(n0, _GDSI, 0, [_SFDS], [() => GeospatialStaticFileSource]);
export var GeospatialGradientColor = struct(
  n0,
  _GGC,
  0,
  [_SCte, _NDV, _NDS, _DOe],
  [() => GeospatialGradientStepColorList, 0, () => GeospatialNullDataSettings, 1]
);
export var GeospatialGradientStepColor = struct(n0, _GGSC, 0, [_Col, _DVat], [0, 1]);
export var GeospatialHeatmapColorScale = struct(n0, _GHCS, 0, [_Co], [() => GeospatialHeatmapDataColorList]);
export var GeospatialHeatmapConfiguration = struct(n0, _GHC, 0, [_HC], [() => GeospatialHeatmapColorScale]);
export var GeospatialHeatmapDataColor = struct(n0, _GHDC, 0, [_Col], [0]);
export var GeospatialLayerColorField = struct(
  n0,
  _GLCF,
  0,
  [_CDFo, _CVF],
  [
    [() => GeospatialLayerDimensionFieldList, 0],
    [() => GeospatialLayerMeasureFieldList, 0],
  ]
);
export var GeospatialLayerDefinition = struct(
  n0,
  _GLD,
  0,
  [_PL, _LL, _PLo],
  [() => GeospatialPointLayer, () => GeospatialLineLayer, () => GeospatialPolygonLayer]
);
export var GeospatialLayerItem = struct(
  n0,
  _GLI,
  0,
  [_LI, _LT, _DSatao, _Lab, _Vi, _LD, _To, _JD, _Ac],
  [
    0,
    0,
    () => GeospatialDataSourceItem,
    0,
    0,
    () => GeospatialLayerDefinition,
    () => TooltipOptions,
    () => GeospatialLayerJoinDefinition,
    () => LayerCustomActionList,
  ]
);
export var GeospatialLayerJoinDefinition = struct(
  n0,
  _GLJD,
  0,
  [_SKF, _DKF, _CFol],
  [0, () => UnaggregatedField, () => GeospatialLayerColorField]
);
export var GeospatialLayerMapConfiguration = struct(
  n0,
  _GLMC,
  0,
  [_Le, _ML, _MS, _MSa, _I],
  [
    () => LegendOptions,
    () => GeospatialMapLayerList,
    () => GeospatialMapState,
    () => GeospatialMapStyle,
    () => VisualInteractionOptions,
  ]
);
export var GeospatialLineLayer = struct(n0, _GLL, 0, [_Sty], [() => GeospatialLineStyle]);
export var GeospatialLineStyle = struct(n0, _GLS, 0, [_LSS], [() => GeospatialLineSymbolStyle]);
export var GeospatialLineSymbolStyle = struct(
  n0,
  _GLSS,
  0,
  [_FCil, _LW],
  [() => GeospatialColor, () => GeospatialLineWidth]
);
export var GeospatialLineWidth = struct(n0, _GLW, 0, [_LW], [1]);
export var GeospatialMapAggregatedFieldWells = struct(
  n0,
  _GMAFW,
  0,
  [_Ge, _Va, _Co],
  [() => DimensionFieldList, () => MeasureFieldList, () => DimensionFieldList]
);
export var GeospatialMapConfiguration = struct(
  n0,
  _GMC,
  0,
  [_FW, _Le, _To, _WO, _MSO, _PSO, _VP, _I],
  [
    () => GeospatialMapFieldWells,
    () => LegendOptions,
    () => TooltipOptions,
    () => GeospatialWindowOptions,
    () => GeospatialMapStyleOptions,
    () => GeospatialPointStyleOptions,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var GeospatialMapFieldWells = struct(n0, _GMFW, 0, [_GMAFW], [() => GeospatialMapAggregatedFieldWells]);
export var GeospatialMapState = struct(n0, _GMS, 0, [_Bo, _MNa], [() => GeospatialCoordinateBounds, 0]);
export var GeospatialMapStyle = struct(n0, _GMSe, 0, [_BMS, _BCa, _BMV], [0, 0, 0]);
export var GeospatialMapStyleOptions = struct(n0, _GMSO, 0, [_BMS], [0]);
export var GeospatialMapVisual = struct(
  n0,
  _GMV,
  0,
  [_VI, _Tit, _Su, _CCh, _CH, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => GeospatialMapConfiguration,
    () => ColumnHierarchyList,
    () => VisualCustomActionList,
    0,
  ]
);
export var GeospatialNullDataSettings = struct(n0, _GNDS, 0, [_SSy], [() => GeospatialNullSymbolStyle]);
export var GeospatialNullSymbolStyle = struct(n0, _GNSS, 0, [_FCil, _SCtr, _SW], [0, 0, 1]);
export var GeospatialPointLayer = struct(n0, _GPL, 0, [_Sty], [() => GeospatialPointStyle]);
export var GeospatialPointStyle = struct(n0, _GPS, 0, [_CSS], [() => GeospatialCircleSymbolStyle]);
export var GeospatialPointStyleOptions = struct(
  n0,
  _GPSO,
  0,
  [_SPS, _CMC, _HCe],
  [0, () => ClusterMarkerConfiguration, () => GeospatialHeatmapConfiguration]
);
export var GeospatialPolygonLayer = struct(n0, _GPLe, 0, [_Sty], [() => GeospatialPolygonStyle]);
export var GeospatialPolygonStyle = struct(n0, _GPSe, 0, [_PSS], [() => GeospatialPolygonSymbolStyle]);
export var GeospatialPolygonSymbolStyle = struct(
  n0,
  _GPSS,
  0,
  [_FCil, _SCtr, _SW],
  [() => GeospatialColor, () => GeospatialColor, () => GeospatialLineWidth]
);
export var GeospatialSolidColor = struct(n0, _GSC, 0, [_Col, _Sta], [0, 0]);
export var GeospatialStaticFileSource = struct(n0, _GSFS, 0, [_SFIt], [0]);
export var GeospatialWindowOptions = struct(n0, _GWO, 0, [_Bo, _MZM], [() => GeospatialCoordinateBounds, 0]);
export var GlobalTableBorderOptions = struct(
  n0,
  _GTBO,
  0,
  [_UBn, _SSB],
  [() => TableBorderOptions, () => TableSideBorderOptions]
);
export var GradientColor = struct(n0, _GCr, 0, [_Sto], [() => GradientStopList]);
export var GradientStop = struct(n0, _GSr, 0, [_GO, _DVat, _Col], [1, 1, 0]);
export var GridLayoutCanvasSizeOptions = struct(n0, _GLCSO, 0, [_SCSO], [() => GridLayoutScreenCanvasSizeOptions]);
export var GridLayoutConfiguration = struct(
  n0,
  _GLC,
  0,
  [_Ele, _CSO],
  [() => GridLayoutElementList, () => GridLayoutCanvasSizeOptions]
);
export var GridLayoutElement = struct(n0, _GLE, 0, [_EIl, _ET, _CIol, _CSolumn, _RIo, _RSo], [0, 0, 1, 1, 1, 1]);
export var GridLayoutScreenCanvasSizeOptions = struct(n0, _GLSCSO, 0, [_RO, _OVPW], [0, 0]);
export var GrowthRateComputation = struct(
  n0,
  _GRC,
  0,
  [_CIom, _N, _Tim, _V, _PS],
  [0, 0, () => DimensionField, () => MeasureField, 1]
);
export var HeaderFooterSectionConfiguration = struct(
  n0,
  _HFSC,
  0,
  [_SIe, _La, _Sty],
  [0, () => SectionLayoutConfiguration, () => SectionStyle]
);
export var HeatMapAggregatedFieldWells = struct(
  n0,
  _HMAFW,
  0,
  [_Row, _Colu, _Va],
  [() => HeatMapDimensionFieldList, () => HeatMapDimensionFieldList, () => HeatMapMeasureFieldList]
);
export var HeatMapConfiguration = struct(
  n0,
  _HMC,
  0,
  [_FW, _SCo, _RADO, _RLO, _CADO, _CLOol, _CSol, _Le, _DL, _To, _I],
  [
    () => HeatMapFieldWells,
    () => HeatMapSortConfiguration,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => ColorScale,
    () => LegendOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => VisualInteractionOptions,
  ]
);
export var HeatMapFieldWells = struct(n0, _HMFW, 0, [_HMAFW], [() => HeatMapAggregatedFieldWells]);
export var HeatMapSortConfiguration = struct(
  n0,
  _HMSC,
  0,
  [_HMRS, _HMCS, _HMRILC, _HMCILC],
  [() => FieldSortOptionsList, () => FieldSortOptionsList, () => ItemsLimitConfiguration, () => ItemsLimitConfiguration]
);
export var HeatMapVisual = struct(
  n0,
  _HMV,
  0,
  [_VI, _Tit, _Su, _CCh, _CH, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => HeatMapConfiguration,
    () => ColumnHierarchyList,
    () => VisualCustomActionList,
    0,
  ]
);
export var HistogramAggregatedFieldWells = struct(n0, _HAFW, 0, [_Va], [() => HistogramMeasureFieldList]);
export var HistogramBinOptions = struct(
  n0,
  _HBO,
  0,
  [_SBT, _BCi, _BW, _SVtar],
  [0, () => BinCountOptions, () => BinWidthOptions, 1]
);
export var HistogramConfiguration = struct(
  n0,
  _HCi,
  0,
  [_FW, _XADO, _XALO, _YADO, _BO, _DL, _To, _VP, _I],
  [
    () => HistogramFieldWells,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => HistogramBinOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var HistogramFieldWells = struct(n0, _HFW, 0, [_HAFW], [() => HistogramAggregatedFieldWells]);
export var HistogramVisual = struct(
  n0,
  _HV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => HistogramConfiguration,
    () => VisualCustomActionList,
    0,
  ]
);
export var ImageStaticFile = struct(n0, _ISF, 0, [_SFIt, _Sour], [0, () => StaticFileSource]);
export var InnerFilter = struct(n0, _IF, 0, [_CIF], [() => CategoryInnerFilter]);
export var InsightConfiguration = struct(
  n0,
  _ICns,
  0,
  [_Compu, _CNu, _I],
  [() => ComputationList, () => CustomNarrativeOptions, () => VisualInteractionOptions]
);
export var InsightVisual = struct(
  n0,
  _IVn,
  0,
  [_VI, _Tit, _Su, _ICns, _Ac, _DSIatae, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => InsightConfiguration,
    () => VisualCustomActionList,
    0,
    0,
  ]
);
export var IntegerDefaultValues = struct(
  n0,
  _IDV,
  0,
  [_DVy, _SVta],
  [() => DynamicDefaultValue, [() => IntegerDefaultValueList, 0]]
);
export var IntegerParameter = struct(n0, _IPn, 0, [_N, _Va], [0, [() => SensitiveLongList, 0]]);
export var IntegerParameterDeclaration = struct(
  n0,
  _IPD,
  0,
  [_PVT, _N, _DVef, _VWU, _MDSP],
  [0, 0, [() => IntegerDefaultValues, 0], [() => IntegerValueWhenUnsetConfiguration, 0], () => MappedDataSetParameters]
);
export var IntegerValueWhenUnsetConfiguration = struct(n0, _IVWUC, 0, [_VWUO, _CVus], [0, [() => SensitiveLong, 0]]);
export var ItemsLimitConfiguration = struct(n0, _ILCt, 0, [_IL, _OCt], [1, 0]);
export var KPIActualValueConditionalFormatting = struct(
  n0,
  _KPIAVCF,
  0,
  [_TC, _Ic],
  [() => ConditionalFormattingColor, () => ConditionalFormattingIcon]
);
export var KPIComparisonValueConditionalFormatting = struct(
  n0,
  _KPICVCF,
  0,
  [_TC, _Ic],
  [() => ConditionalFormattingColor, () => ConditionalFormattingIcon]
);
export var KPIConditionalFormatting = struct(n0, _KPICF, 0, [_CFO], [() => KPIConditionalFormattingOptionList]);
export var KPIConditionalFormattingOption = struct(
  n0,
  _KPICFO,
  0,
  [_PVr, _PBr, _AVc, _CVo],
  [
    () => KPIPrimaryValueConditionalFormatting,
    () => KPIProgressBarConditionalFormatting,
    () => KPIActualValueConditionalFormatting,
    () => KPIComparisonValueConditionalFormatting,
  ]
);
export var KPIConfiguration = struct(
  n0,
  _KPIC,
  0,
  [_FW, _SCo, _KPIO, _I],
  [() => KPIFieldWells, () => KPISortConfiguration, () => KPIOptions, () => VisualInteractionOptions]
);
export var KPIFieldWells = struct(
  n0,
  _KPIFW,
  0,
  [_Va, _TVa, _TGr],
  [() => MeasureFieldList, () => MeasureFieldList, () => DimensionFieldList]
);
export var KPIOptions = struct(
  n0,
  _KPIO,
  0,
  [_PBr, _TAr, _SVec, _Comp, _PVDT, _PVFC, _SVFC, _Sp, _VLOi],
  [
    () => ProgressBarOptions,
    () => TrendArrowOptions,
    () => SecondaryValueOptions,
    () => ComparisonConfiguration,
    0,
    () => FontConfiguration,
    () => FontConfiguration,
    () => KPISparklineOptions,
    () => KPIVisualLayoutOptions,
  ]
);
export var KPIPrimaryValueConditionalFormatting = struct(
  n0,
  _KPIPVCF,
  0,
  [_TC, _Ic],
  [() => ConditionalFormattingColor, () => ConditionalFormattingIcon]
);
export var KPIProgressBarConditionalFormatting = struct(n0, _KPIPBCF, 0, [_FCoreg], [() => ConditionalFormattingColor]);
export var KPISortConfiguration = struct(n0, _KPISC, 0, [_TGS], [() => FieldSortOptionsList]);
export var KPISparklineOptions = struct(n0, _KPISO, 0, [_Vi, _T, _Col, _TVo], [0, 0, 0, 0]);
export var KPIVisual = struct(
  n0,
  _KPIV,
  0,
  [_VI, _Tit, _Su, _CCh, _CFon, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => KPIConfiguration,
    () => KPIConditionalFormatting,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var KPIVisualLayoutOptions = struct(n0, _KPIVLO, 0, [_SLt], [() => KPIVisualStandardLayout]);
export var KPIVisualStandardLayout = struct(n0, _KPIVSL, 0, [_T], [0]);
export var LabelOptions = struct(n0, _LO, 0, [_Vi, _FCo, _CL], [0, () => FontConfiguration, 0]);
export var LayerCustomAction = struct(
  n0,
  _LCA,
  0,
  [_CAI, _N, _St, _Tr, _AOc],
  [0, 0, 0, 0, () => LayerCustomActionOperationList]
);
export var LayerCustomActionOperation = struct(
  n0,
  _LCAO,
  0,
  [_FO, _NOa, _URLO, _SPO],
  [
    () => CustomActionFilterOperation,
    () => CustomActionNavigationOperation,
    () => CustomActionURLOperation,
    () => CustomActionSetParametersOperation,
  ]
);
export var LayerMapVisual = struct(
  n0,
  _LMV,
  0,
  [_VI, _Tit, _Su, _CCh, _DSIatae, _VCAT],
  [0, () => VisualTitleLabelOptions, () => VisualSubtitleLabelOptions, () => GeospatialLayerMapConfiguration, 0, 0]
);
export var Layout = struct(n0, _La, 0, [_Conf], [() => LayoutConfiguration]);
export var LayoutConfiguration = struct(
  n0,
  _LCay,
  0,
  [_GL, _FFL, _SBL],
  [() => GridLayoutConfiguration, () => FreeFormLayoutConfiguration, () => SectionBasedLayoutConfiguration]
);
export var LegendOptions = struct(
  n0,
  _LOeg,
  0,
  [_Vi, _Tit, _Pos, _Wi, _He, _VFC],
  [0, () => LabelOptions, 0, 0, 0, () => FontConfiguration]
);
export var LineChartAggregatedFieldWells = struct(
  n0,
  _LCAFW,
  0,
  [_Ca, _Va, _Co, _SM],
  [() => DimensionFieldList, () => MeasureFieldList, () => DimensionFieldList, () => SmallMultiplesDimensionFieldList]
);
export var LineChartConfiguration = struct(
  n0,
  _LCC,
  0,
  [
    _FW,
    _SCo,
    _FCoreca,
    _T,
    _SMO,
    _XADO,
    _XALO,
    _PYADO,
    _PYALO,
    _SYADO,
    _SYALO,
    _SAO,
    _DSSe,
    _Ser,
    _Le,
    _DL,
    _RL,
    _To,
    _CADo,
    _VP,
    _I,
  ],
  [
    () => LineChartFieldWells,
    () => LineChartSortConfiguration,
    () => ForecastConfigurationList,
    0,
    () => SmallMultiplesOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => LineSeriesAxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => LineSeriesAxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => SingleAxisOptions,
    () => LineChartDefaultSeriesSettings,
    () => SeriesItemList,
    () => LegendOptions,
    () => DataLabelOptions,
    () => ReferenceLineList,
    () => TooltipOptions,
    () => ContributionAnalysisDefaultList,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var LineChartDefaultSeriesSettings = struct(
  n0,
  _LCDSS,
  0,
  [_AB, _LSSi, _MSS],
  [0, () => LineChartLineStyleSettings, () => LineChartMarkerStyleSettings]
);
export var LineChartFieldWells = struct(n0, _LCFW, 0, [_LCAFW], [() => LineChartAggregatedFieldWells]);
export var LineChartLineStyleSettings = struct(n0, _LCLSS, 0, [_LVi, _LIi, _LS, _LW], [0, 0, 0, 0]);
export var LineChartMarkerStyleSettings = struct(n0, _LCMSS, 0, [_MVa, _MSar, _MSark, _MCa], [0, 0, 0, 0]);
export var LineChartSeriesSettings = struct(
  n0,
  _LCSS,
  0,
  [_LSSi, _MSS],
  [() => LineChartLineStyleSettings, () => LineChartMarkerStyleSettings]
);
export var LineChartSortConfiguration = struct(
  n0,
  _LCSC,
  0,
  [_CS, _CILC, _CILCo, _SMS, _SMLC],
  [
    () => FieldSortOptionsList,
    () => ItemsLimitConfiguration,
    () => ItemsLimitConfiguration,
    () => FieldSortOptionsList,
    () => ItemsLimitConfiguration,
  ]
);
export var LineChartVisual = struct(
  n0,
  _LCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => LineChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var LineSeriesAxisDisplayOptions = struct(
  n0,
  _LSADO,
  0,
  [_AOxi, _MDC],
  [() => AxisDisplayOptions, () => MissingDataConfigurationList]
);
export var ListControlDisplayOptions = struct(
  n0,
  _LCDO,
  0,
  [_SOe, _SAOe, _TO, _IILO],
  [
    () => ListControlSearchOptions,
    () => ListControlSelectAllOptions,
    () => LabelOptions,
    () => SheetControlInfoIconLabelOptions,
  ]
);
export var ListControlSearchOptions = struct(n0, _LCSO, 0, [_Vi], [0]);
export var ListControlSelectAllOptions = struct(n0, _LCSAO, 0, [_Vi], [0]);
export var LoadingAnimation = struct(n0, _LA, 0, [_Vi], [0]);
export var LongFormatText = struct(n0, _LFT, 0, [_PT, _RTi], [0, 0]);
export var MappedDataSetParameter = struct(n0, _MDSPa, 0, [_DSIatae, _DSPN], [0, 0]);
export var MaximumLabelType = struct(n0, _MLTa, 0, [_Vi], [0]);
export var MaximumMinimumComputation = struct(
  n0,
  _MMC,
  0,
  [_CIom, _N, _Tim, _V, _T],
  [0, 0, () => DimensionField, () => MeasureField, 0]
);
export var MeasureField = struct(
  n0,
  _MF,
  0,
  [_NMF, _CMFa, _DMF, _CMF],
  [
    [() => NumericalMeasureField, 0],
    [() => CategoricalMeasureField, 0],
    [() => DateMeasureField, 0],
    [() => CalculatedMeasureField, 0],
  ]
);
export var MetricComparisonComputation = struct(
  n0,
  _MCC,
  0,
  [_CIom, _N, _Tim, _FVr, _TVar],
  [0, 0, () => DimensionField, () => MeasureField, () => MeasureField]
);
export var MinimumLabelType = struct(n0, _MLT, 0, [_Vi], [0]);
export var MissingDataConfiguration = struct(n0, _MDCi, 0, [_TOr], [0]);
export var NegativeValueConfiguration = struct(n0, _NVCe, 0, [_DMi], [0]);
export var NestedFilter = struct(
  n0,
  _NFe,
  0,
  [_FIil, _C, _IIS, _IF],
  [0, () => ColumnIdentifier, 2, () => InnerFilter]
);
export var NullValueFormatConfiguration = struct(n0, _NVFC, 0, [_NS], [[() => NullString, 0]]);
export var NumberDisplayFormatConfiguration = struct(
  n0,
  _NDFC,
  0,
  [_P, _S, _SCe, _DPC, _NSu, _NVCe, _NVFC],
  [
    [() => Prefix, 0],
    [() => Suffix, 0],
    () => NumericSeparatorConfiguration,
    () => DecimalPlacesConfiguration,
    0,
    () => NegativeValueConfiguration,
    [() => NullValueFormatConfiguration, 0],
  ]
);
export var NumberFormatConfiguration = struct(n0, _NFCu, 0, [_FCor], [[() => NumericFormatConfiguration, 0]]);
export var NumericalAggregationFunction = struct(n0, _NAF, 0, [_SNA, _PAe], [0, () => PercentileAggregation]);
export var NumericalDimensionField = struct(
  n0,
  _NDF,
  0,
  [_FIi, _C, _HI, _FCor],
  [0, () => ColumnIdentifier, 0, [() => NumberFormatConfiguration, 0]]
);
export var NumericalMeasureField = struct(
  n0,
  _NMF,
  0,
  [_FIi, _C, _AFg, _FCor],
  [0, () => ColumnIdentifier, () => NumericalAggregationFunction, [() => NumberFormatConfiguration, 0]]
);
export var NumericAxisOptions = struct(n0, _NAO, 0, [_Sca, _R], [() => AxisScale, () => AxisDisplayRange]);
export var NumericEqualityDrillDownFilter = struct(n0, _NEDDF, 0, [_C, _V], [() => ColumnIdentifier, 1]);
export var NumericEqualityFilter = struct(
  n0,
  _NEF,
  0,
  [_FIil, _C, _V, _SAOe, _MO, _AFg, _PN, _NO, _DFCC],
  [0, () => ColumnIdentifier, 1, 0, 0, () => AggregationFunction, 0, 0, () => DefaultFilterControlConfiguration]
);
export var NumericFormatConfiguration = struct(
  n0,
  _NFC,
  0,
  [_NDFC, _CDFC, _PDFC],
  [
    [() => NumberDisplayFormatConfiguration, 0],
    [() => CurrencyDisplayFormatConfiguration, 0],
    [() => PercentageDisplayFormatConfiguration, 0],
  ]
);
export var NumericRangeFilter = struct(
  n0,
  _NRF,
  0,
  [_FIil, _C, _IMn, _IMnc, _RM, _RMa, _SAOe, _AFg, _NO, _DFCC],
  [
    0,
    () => ColumnIdentifier,
    2,
    2,
    () => NumericRangeFilterValue,
    () => NumericRangeFilterValue,
    0,
    () => AggregationFunction,
    0,
    () => DefaultFilterControlConfiguration,
  ]
);
export var NumericRangeFilterValue = struct(n0, _NRFV, 0, [_SVtat, _Para], [1, 0]);
export var NumericSeparatorConfiguration = struct(n0, _NSC, 0, [_DSec, _TSh], [0, () => ThousandSeparatorOptions]);
export var PaginationConfiguration = struct(n0, _PC, 0, [_PSa, _PNa], [1, 1]);
export var PanelConfiguration = struct(
  n0,
  _PCa,
  0,
  [_Tit, _BVo, _BT, _BS, _BCo, _GV, _GSut, _BVa, _BCa],
  [() => PanelTitleOptions, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var PanelTitleOptions = struct(n0, _PTO, 0, [_Vi, _FCo, _HTA], [0, () => FontConfiguration, 0]);
export var ParameterControl = struct(
  n0,
  _PCar,
  0,
  [_DTPa, _Lis, _Dr, _TFe, _TAex, _Sl],
  [
    () => ParameterDateTimePickerControl,
    () => ParameterListControl,
    () => ParameterDropDownControl,
    () => ParameterTextFieldControl,
    () => ParameterTextAreaControl,
    () => ParameterSliderControl,
  ]
);
export var ParameterDateTimePickerControl = struct(
  n0,
  _PDTPC,
  0,
  [_PCI, _Tit, _SPN, _DOi],
  [0, 0, 0, () => DateTimePickerControlDisplayOptions]
);
export var ParameterDeclaration = struct(
  n0,
  _PDa,
  0,
  [_SPD, _DPD, _IPD, _DTPD],
  [
    [() => StringParameterDeclaration, 0],
    [() => DecimalParameterDeclaration, 0],
    [() => IntegerParameterDeclaration, 0],
    [() => DateTimeParameterDeclaration, 0],
  ]
);
export var ParameterDropDownControl = struct(
  n0,
  _PDDC,
  0,
  [_PCI, _Tit, _SPN, _DOi, _T, _SVe, _CCC, _CMom],
  [
    0,
    0,
    0,
    () => DropDownControlDisplayOptions,
    0,
    () => ParameterSelectableValues,
    () => CascadingControlConfiguration,
    0,
  ]
);
export var ParameterListControl = struct(
  n0,
  _PLCa,
  0,
  [_PCI, _Tit, _SPN, _DOi, _T, _SVe, _CCC],
  [0, 0, 0, () => ListControlDisplayOptions, 0, () => ParameterSelectableValues, () => CascadingControlConfiguration]
);
export var _Parameters = struct(
  n0,
  _Par,
  0,
  [_SPt, _IPnt, _DPeci, _DTPat],
  [
    [() => StringParameterList, 0],
    [() => IntegerParameterList, 0],
    [() => DecimalParameterList, 0],
    [() => DateTimeParameterList, 0],
  ]
);
export var ParameterSelectableValues = struct(n0, _PSV, 0, [_Va, _LTDSC], [64 | 0, () => ColumnIdentifier]);
export var ParameterSliderControl = struct(
  n0,
  _PSC,
  0,
  [_PCI, _Tit, _SPN, _DOi, _MV, _MVi, _SSt],
  [0, 0, 0, () => SliderControlDisplayOptions, 1, 1, 1]
);
export var ParameterTextAreaControl = struct(
  n0,
  _PTAC,
  0,
  [_PCI, _Tit, _SPN, _Del, _DOi],
  [0, 0, 0, 0, () => TextAreaControlDisplayOptions]
);
export var ParameterTextFieldControl = struct(
  n0,
  _PTFC,
  0,
  [_PCI, _Tit, _SPN, _DOi],
  [0, 0, 0, () => TextFieldControlDisplayOptions]
);
export var PercentageDisplayFormatConfiguration = struct(
  n0,
  _PDFC,
  0,
  [_P, _S, _SCe, _DPC, _NVCe, _NVFC],
  [
    [() => Prefix, 0],
    [() => Suffix, 0],
    () => NumericSeparatorConfiguration,
    () => DecimalPlacesConfiguration,
    () => NegativeValueConfiguration,
    [() => NullValueFormatConfiguration, 0],
  ]
);
export var PercentileAggregation = struct(n0, _PAe, 0, [_PVe], [1]);
export var PercentVisibleRange = struct(n0, _PVR, 0, [_Fr, _To_], [1, 1]);
export var PeriodOverPeriodComputation = struct(
  n0,
  _POPC,
  0,
  [_CIom, _N, _Tim, _V],
  [0, 0, () => DimensionField, () => MeasureField]
);
export var PeriodToDateComputation = struct(
  n0,
  _PTDC,
  0,
  [_CIom, _N, _Tim, _V, _PTG],
  [0, 0, () => DimensionField, () => MeasureField, 0]
);
export var PieChartAggregatedFieldWells = struct(
  n0,
  _PCAFW,
  0,
  [_Ca, _Va, _SM],
  [() => DimensionFieldList, () => MeasureFieldList, () => SmallMultiplesDimensionFieldList]
);
export var PieChartConfiguration = struct(
  n0,
  _PCC,
  0,
  [_FW, _SCo, _DOo, _SMO, _CLO, _VLO, _Le, _DL, _To, _VP, _CADo, _I],
  [
    () => PieChartFieldWells,
    () => PieChartSortConfiguration,
    () => DonutOptions,
    () => SmallMultiplesOptions,
    () => ChartAxisLabelOptions,
    () => ChartAxisLabelOptions,
    () => LegendOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => VisualPalette,
    () => ContributionAnalysisDefaultList,
    () => VisualInteractionOptions,
  ]
);
export var PieChartFieldWells = struct(n0, _PCFW, 0, [_PCAFW], [() => PieChartAggregatedFieldWells]);
export var PieChartSortConfiguration = struct(
  n0,
  _PCSC,
  0,
  [_CS, _CIL, _SMS, _SMLC],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration, () => FieldSortOptionsList, () => ItemsLimitConfiguration]
);
export var PieChartVisual = struct(
  n0,
  _PCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => PieChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var PivotFieldSortOptions = struct(n0, _PFSO, 0, [_FIi, _SB], [0, () => PivotTableSortBy]);
export var PivotTableAggregatedFieldWells = struct(
  n0,
  _PTAFW,
  0,
  [_Row, _Colu, _Va],
  [() => PivotTableDimensionList, () => PivotTableDimensionList, () => PivotMeasureFieldList]
);
export var PivotTableCellConditionalFormatting = struct(
  n0,
  _PTCCF,
  0,
  [_FIi, _TFex, _Sco, _Scop],
  [
    0,
    () => TextConditionalFormat,
    () => PivotTableConditionalFormattingScope,
    () => PivotTableConditionalFormattingScopeList,
  ]
);
export var PivotTableConditionalFormatting = struct(
  n0,
  _PTCF,
  0,
  [_CFO],
  [() => PivotTableConditionalFormattingOptionList]
);
export var PivotTableConditionalFormattingOption = struct(
  n0,
  _PTCFO,
  0,
  [_Ce],
  [() => PivotTableCellConditionalFormatting]
);
export var PivotTableConditionalFormattingScope = struct(n0, _PTCFS, 0, [_Ro], [0]);
export var PivotTableConfiguration = struct(
  n0,
  _PTC,
  0,
  [_FW, _SCo, _TOa, _TOot, _FOi, _PRO, _I],
  [
    () => PivotTableFieldWells,
    () => PivotTableSortConfiguration,
    () => PivotTableOptions,
    () => PivotTableTotalOptions,
    () => PivotTableFieldOptions,
    () => PivotTablePaginatedReportOptions,
    () => VisualInteractionOptions,
  ]
);
export var PivotTableDataPathOption = struct(n0, _PTDPO, 0, [_DPL, _Wi], [() => DataPathValueList, 0]);
export var PivotTableFieldCollapseStateOption = struct(
  n0,
  _PTFCSO,
  0,
  [_Tar, _Sta],
  [() => PivotTableFieldCollapseStateTarget, 0]
);
export var PivotTableFieldCollapseStateTarget = struct(
  n0,
  _PTFCST,
  0,
  [_FIi, _FDPV],
  [0, [() => DataPathValueList, 0]]
);
export var PivotTableFieldOption = struct(n0, _PTFO, 0, [_FIi, _CL, _Vi], [0, 0, 0]);
export var PivotTableFieldOptions = struct(
  n0,
  _PTFOi,
  0,
  [_SFO, _DPOa, _CSOo],
  [() => PivotTableFieldOptionList, () => PivotTableDataPathOptionList, () => PivotTableFieldCollapseStateOptionList]
);
export var PivotTableFieldSubtotalOptions = struct(n0, _PTFSO, 0, [_FIi], [0]);
export var PivotTableFieldWells = struct(n0, _PTFW, 0, [_PTAFW], [() => PivotTableAggregatedFieldWells]);
export var PivotTableOptions = struct(
  n0,
  _PTOi,
  0,
  [_MP, _SMV, _CNV, _TBV, _CHS, _RHS, _CSe, _RFNS, _RACO, _CRDV, _RLo, _RLOo, _DCW],
  [
    0,
    0,
    0,
    0,
    () => TableCellStyle,
    () => TableCellStyle,
    () => TableCellStyle,
    () => TableCellStyle,
    () => RowAlternateColorOptions,
    0,
    0,
    () => PivotTableRowsLabelOptions,
    0,
  ]
);
export var PivotTablePaginatedReportOptions = struct(n0, _PTPRO, 0, [_VOV, _OCHV], [0, 0]);
export var PivotTableRowsLabelOptions = struct(n0, _PTRLO, 0, [_Vi, _CL], [0, 0]);
export var PivotTableSortBy = struct(
  n0,
  _PTSB,
  0,
  [_Fie, _C, _DPata],
  [() => FieldSort, () => ColumnSort, [() => DataPathSort, 0]]
);
export var PivotTableSortConfiguration = struct(n0, _PTSC, 0, [_FSO], [() => PivotFieldSortOptionsList]);
export var PivotTableTotalOptions = struct(
  n0,
  _PTTO,
  0,
  [_RSO, _CSOol, _RTO, _CTO],
  [() => SubtotalOptions, () => SubtotalOptions, () => PivotTotalOptions, () => PivotTotalOptions]
);
export var PivotTableVisual = struct(
  n0,
  _PTV,
  0,
  [_VI, _Tit, _Su, _CCh, _CFon, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => PivotTableConfiguration,
    () => PivotTableConditionalFormatting,
    () => VisualCustomActionList,
    0,
  ]
);
export var PivotTotalOptions = struct(
  n0,
  _PTOiv,
  0,
  [_TV, _Pla, _SSc, _CL, _TCS, _VCS, _MHCS, _TAO],
  [0, 0, 0, 0, () => TableCellStyle, () => TableCellStyle, () => TableCellStyle, () => TotalAggregationOptionList]
);
export var PluginVisual = struct(
  n0,
  _PVl,
  0,
  [_VI, _PAl, _Tit, _Su, _CCh, _Ac, _VCAT],
  [
    0,
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => PluginVisualConfiguration,
    () => VisualCustomActionList,
    0,
  ]
);
export var PluginVisualConfiguration = struct(
  n0,
  _PVCl,
  0,
  [_FW, _VO, _SCo],
  [() => PluginVisualFieldWells, () => PluginVisualOptions, () => PluginVisualSortConfiguration]
);
export var PluginVisualFieldWell = struct(
  n0,
  _PVFW,
  0,
  [_ANx, _Dim, _Mea, _Un],
  [0, () => DimensionFieldList, () => MeasureFieldList, () => UnaggregatedFieldList]
);
export var PluginVisualItemsLimitConfiguration = struct(n0, _PVILC, 0, [_IL], [1]);
export var PluginVisualOptions = struct(n0, _PVO, 0, [_VPi], [() => PluginVisualPropertiesList]);
export var PluginVisualProperty = struct(n0, _PVP, 0, [_N, _V], [0, 0]);
export var PluginVisualSortConfiguration = struct(n0, _PVSC, 0, [_PVTQS], [() => PluginVisualTableQuerySort]);
export var PluginVisualTableQuerySort = struct(
  n0,
  _PVTQS,
  0,
  [_RSow, _ILCt],
  [() => RowSortList, () => PluginVisualItemsLimitConfiguration]
);
export var PredefinedHierarchy = struct(
  n0,
  _PH,
  0,
  [_HI, _Colu, _DDFr],
  [0, () => PredefinedHierarchyColumnList, () => DrillDownFilterList]
);
export var ProgressBarOptions = struct(n0, _PBO, 0, [_Vi], [0]);
export var QueryExecutionOptions = struct(n0, _QEO, 0, [_QEM], [0]);
export var RadarChartAggregatedFieldWells = struct(
  n0,
  _RCAFW,
  0,
  [_Ca, _Col, _Va],
  [() => RadarChartCategoryFieldList, () => RadarChartColorFieldList, () => RadarChartValuesFieldList]
);
export var RadarChartAreaStyleSettings = struct(n0, _RCASS, 0, [_Vi], [0]);
export var RadarChartConfiguration = struct(
  n0,
  _RCC,
  0,
  [_FW, _SCo, _Sha, _BSS, _SAt, _VP, _ABCV, _ABEC, _ABOC, _CA, _CLO, _CAo, _CLOo, _Le, _ARS, _I],
  [
    () => RadarChartFieldWells,
    () => RadarChartSortConfiguration,
    0,
    () => RadarChartSeriesSettings,
    1,
    () => VisualPalette,
    0,
    0,
    0,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => LegendOptions,
    0,
    () => VisualInteractionOptions,
  ]
);
export var RadarChartFieldWells = struct(n0, _RCFW, 0, [_RCAFW], [() => RadarChartAggregatedFieldWells]);
export var RadarChartSeriesSettings = struct(n0, _RCSS, 0, [_ASSr], [() => RadarChartAreaStyleSettings]);
export var RadarChartSortConfiguration = struct(
  n0,
  _RCSC,
  0,
  [_CS, _CIL, _CSo, _CILo],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration, () => FieldSortOptionsList, () => ItemsLimitConfiguration]
);
export var RadarChartVisual = struct(
  n0,
  _RCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => RadarChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var RangeEndsLabelType = struct(n0, _RELT, 0, [_Vi], [0]);
export var ReferenceLine = struct(
  n0,
  _RLe,
  0,
  [_St, _DCat, _SCty, _LCabe],
  [
    0,
    () => ReferenceLineDataConfiguration,
    () => ReferenceLineStyleConfiguration,
    () => ReferenceLineLabelConfiguration,
  ]
);
export var ReferenceLineCustomLabelConfiguration = struct(n0, _RLCLC, 0, [_CL], [0]);
export var ReferenceLineDataConfiguration = struct(
  n0,
  _RLDC,
  0,
  [_SCta, _DCy, _AB, _STer],
  [() => ReferenceLineStaticDataConfiguration, () => ReferenceLineDynamicDataConfiguration, 0, 0]
);
export var ReferenceLineDynamicDataConfiguration = struct(
  n0,
  _RLDDC,
  0,
  [_C, _MAF, _Cal],
  [() => ColumnIdentifier, () => AggregationFunction, () => NumericalAggregationFunction]
);
export var ReferenceLineLabelConfiguration = struct(
  n0,
  _RLLC,
  0,
  [_VLC, _CLC, _FCo, _FCon, _HP, _VPe],
  [
    () => ReferenceLineValueLabelConfiguration,
    () => ReferenceLineCustomLabelConfiguration,
    () => FontConfiguration,
    0,
    0,
    0,
  ]
);
export var ReferenceLineStaticDataConfiguration = struct(n0, _RLSDC, 0, [_V], [[() => SensitiveDouble, 0]]);
export var ReferenceLineStyleConfiguration = struct(n0, _RLSC, 0, [_Patt, _Col], [0, 0]);
export var ReferenceLineValueLabelConfiguration = struct(
  n0,
  _RLVLC,
  0,
  [_RPel, _FCor],
  [0, [() => NumericFormatConfiguration, 0]]
);
export var RelativeDatesFilter = struct(
  n0,
  _RDF,
  0,
  [_FIil, _C, _ADC, _MG, _TG, _RDTe, _RDV, _PN, _NO, _EPC, _DFCC],
  [
    0,
    () => ColumnIdentifier,
    () => AnchorDateConfiguration,
    0,
    0,
    0,
    1,
    0,
    0,
    () => ExcludePeriodConfiguration,
    () => DefaultFilterControlConfiguration,
  ]
);
export var RelativeDateTimeControlDisplayOptions = struct(
  n0,
  _RDTCDO,
  0,
  [_TO, _DTF, _IILO],
  [() => LabelOptions, 0, () => SheetControlInfoIconLabelOptions]
);
export var RollingDateConfiguration = struct(n0, _RDC, 0, [_DSIatae, _E], [0, [() => Expression, 0]]);
export var RowAlternateColorOptions = struct(n0, _RACO, 0, [_St, _RAC, _UPBC], [0, 64 | 0, 0]);
export var SameSheetTargetVisualConfiguration = struct(n0, _SSTVC, 0, [_TVarg, _TVO], [64 | 0, 0]);
export var SankeyDiagramAggregatedFieldWells = struct(
  n0,
  _SDAFW,
  0,
  [_Sour, _Des, _Wei],
  [() => DimensionFieldList, () => DimensionFieldList, () => MeasureFieldList]
);
export var SankeyDiagramChartConfiguration = struct(
  n0,
  _SDCC,
  0,
  [_FW, _SCo, _DL, _I],
  [
    () => SankeyDiagramFieldWells,
    () => SankeyDiagramSortConfiguration,
    () => DataLabelOptions,
    () => VisualInteractionOptions,
  ]
);
export var SankeyDiagramFieldWells = struct(n0, _SDFW, 0, [_SDAFW], [() => SankeyDiagramAggregatedFieldWells]);
export var SankeyDiagramSortConfiguration = struct(
  n0,
  _SDSC,
  0,
  [_WSe, _SIL, _DIL],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration, () => ItemsLimitConfiguration]
);
export var SankeyDiagramVisual = struct(
  n0,
  _SDV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => SankeyDiagramChartConfiguration,
    () => VisualCustomActionList,
    0,
  ]
);
export var ScatterPlotCategoricallyAggregatedFieldWells = struct(
  n0,
  _SPCAFW,
  0,
  [_XA, _YA, _Ca, _Si, _Lab],
  [
    () => MeasureFieldList,
    () => MeasureFieldList,
    () => DimensionFieldList,
    () => MeasureFieldList,
    () => DimensionFieldList,
  ]
);
export var ScatterPlotConfiguration = struct(
  n0,
  _SPC,
  0,
  [_FW, _SCo, _XALO, _XADO, _YALO, _YADO, _Le, _DL, _To, _VP, _I],
  [
    () => ScatterPlotFieldWells,
    () => ScatterPlotSortConfiguration,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => LegendOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => VisualPalette,
    () => VisualInteractionOptions,
  ]
);
export var ScatterPlotFieldWells = struct(
  n0,
  _SPFW,
  0,
  [_SPCAFW, _SPUFW],
  [() => ScatterPlotCategoricallyAggregatedFieldWells, () => ScatterPlotUnaggregatedFieldWells]
);
export var ScatterPlotSortConfiguration = struct(n0, _SPSC, 0, [_SPLC], [() => ItemsLimitConfiguration]);
export var ScatterPlotUnaggregatedFieldWells = struct(
  n0,
  _SPUFW,
  0,
  [_XA, _YA, _Si, _Ca, _Lab],
  [
    () => DimensionFieldList,
    () => DimensionFieldList,
    () => MeasureFieldList,
    () => DimensionFieldList,
    () => DimensionFieldList,
  ]
);
export var ScatterPlotVisual = struct(
  n0,
  _SPV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => ScatterPlotConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var ScrollBarOptions = struct(n0, _SBO, 0, [_Vi, _VR], [0, () => VisibleRangeOptions]);
export var SecondaryValueOptions = struct(n0, _SVO, 0, [_Vi], [0]);
export var SectionAfterPageBreak = struct(n0, _SAPB, 0, [_St], [0]);
export var SectionBasedLayoutCanvasSizeOptions = struct(
  n0,
  _SBLCSO,
  0,
  [_PCSO],
  [() => SectionBasedLayoutPaperCanvasSizeOptions]
);
export var SectionBasedLayoutConfiguration = struct(
  n0,
  _SBLC,
  0,
  [_HS, _BSo, _FSoo, _CSO],
  [
    () => HeaderFooterSectionConfigurationList,
    () => BodySectionConfigurationList,
    () => HeaderFooterSectionConfigurationList,
    () => SectionBasedLayoutCanvasSizeOptions,
  ]
);
export var SectionBasedLayoutPaperCanvasSizeOptions = struct(
  n0,
  _SBLPCSO,
  0,
  [_PSap, _POa, _PMa],
  [0, 0, () => Spacing]
);
export var SectionLayoutConfiguration = struct(n0, _SLC, 0, [_FFL], [() => FreeFormSectionLayoutConfiguration]);
export var SectionPageBreakConfiguration = struct(n0, _SPBC, 0, [_Af], [() => SectionAfterPageBreak]);
export var SectionStyle = struct(n0, _SSec, 0, [_He, _Pad], [0, () => Spacing]);
export var SelectedSheetsFilterScopeConfiguration = struct(
  n0,
  _SSFSC,
  0,
  [_SVSC],
  [() => SheetVisualScopingConfigurations]
);
export var SeriesItem = struct(n0, _SIer, 0, [_FSI, _DFSI], [() => FieldSeriesItem, () => DataFieldSeriesItem]);
export var ShapeConditionalFormat = struct(n0, _SCF, 0, [_BCa], [[() => ConditionalFormattingColor, 0]]);
export var SheetControlInfoIconLabelOptions = struct(n0, _SCIILO, 0, [_Vi, _IIT], [0, 0]);
export var SheetControlLayout = struct(n0, _SCL, 0, [_Conf], [() => SheetControlLayoutConfiguration]);
export var SheetControlLayoutConfiguration = struct(n0, _SCLC, 0, [_GL], [() => GridLayoutConfiguration]);
export var SheetControlsOption = struct(n0, _SCO, 0, [_VSis], [0]);
export var SheetDefinition = struct(
  n0,
  _SDhe,
  0,
  [_SIh, _Tit, _De, _N, _PCara, _FCilt, _Vis, _TB, _Ima, _Lay, _SCLh, _CTont, _CAD],
  [
    0,
    0,
    0,
    0,
    () => ParameterControlList,
    () => FilterControlList,
    () => VisualList,
    () => SheetTextBoxList,
    () => SheetImageList,
    () => LayoutList,
    () => SheetControlLayoutList,
    0,
    () => VisualCustomActionDefaults,
  ]
);
export var SheetElementConfigurationOverrides = struct(n0, _SECO, 0, [_Vi], [0]);
export var SheetElementRenderingRule = struct(
  n0,
  _SERR,
  0,
  [_E, _COon],
  [[() => Expression, 0], () => SheetElementConfigurationOverrides]
);
export var SheetLayoutElementMaximizationOption = struct(n0, _SLEMO, 0, [_ASv], [0]);
export var SheetTextBox = struct(n0, _STB, 0, [_STBI, _Con, _I], [0, 0, () => TextBoxInteractionOptions]);
export var SheetVisualScopingConfiguration = struct(n0, _SVSCh, 0, [_SIh, _Sco, _VIi], [0, 0, 64 | 0]);
export var ShortFormatText = struct(n0, _SFT, 0, [_PT, _RTi], [0, 0]);
export var SimpleClusterMarker = struct(n0, _SCM, 0, [_Col], [0]);
export var SingleAxisOptions = struct(n0, _SAO, 0, [_YAO], [() => YAxisOptions]);
export var SliderControlDisplayOptions = struct(
  n0,
  _SCDO,
  0,
  [_TO, _IILO],
  [() => LabelOptions, () => SheetControlInfoIconLabelOptions]
);
export var SmallMultiplesAxisProperties = struct(n0, _SMAP, 0, [_Sca, _Pla], [0, 0]);
export var SmallMultiplesOptions = struct(
  n0,
  _SMO,
  0,
  [_MVR, _MVC, _PCa, _XA, _YA],
  [1, 1, () => PanelConfiguration, () => SmallMultiplesAxisProperties, () => SmallMultiplesAxisProperties]
);
export var SnapshotAnonymousUser = struct(n0, _SAU, 0, [_RLPT], [[() => SessionTagList, 0]]);
export var SnapshotAnonymousUserRedacted = struct(n0, _SAUR, 0, [_RLPTK], [64 | 0]);
export var SnapshotConfiguration = struct(
  n0,
  _SCn,
  0,
  [_FGi, _DCe, _Par],
  [() => SnapshotFileGroupList, () => SnapshotDestinationConfiguration, [() => _Parameters, 0]]
);
export var SnapshotDestinationConfiguration = struct(
  n0,
  _SDC,
  0,
  [_SDe],
  [() => SnapshotS3DestinationConfigurationList]
);
export var SnapshotFileGroup = struct(n0, _SFG, 0, [_File], [() => SnapshotFileList]);
export var SnapshotUserConfiguration = struct(n0, _SUC, 0, [_AU], [[() => SnapshotAnonymousUserList, 0]]);
export var SnapshotUserConfigurationRedacted = struct(n0, _SUCR, 0, [_AU], [() => SnapshotAnonymousUserRedactedList]);
export var Spacing = struct(n0, _Spa, 0, [_Top_, _Bot, _Lef, _Ri], [0, 0, 0, 0]);
export var SpatialStaticFile = struct(n0, _SSF, 0, [_SFIt, _Sour], [0, () => StaticFileSource]);
export var StartDashboardSnapshotJobRequest = struct(
  n0,
  _SDSJR,
  0,
  [_AAI, _DI, _SJI, _UC, _SCn],
  [[0, 1], [0, 1], 0, [() => SnapshotUserConfiguration, 0], [() => SnapshotConfiguration, 0]]
);
export var StartDashboardSnapshotJobResponse = struct(n0, _SDSJRt, 0, [_Ar, _SJI, _RI, _St], [0, 0, 0, [1, 32]]);
export var StaticFile = struct(n0, _SFt, 0, [_ISF, _SSF], [() => ImageStaticFile, () => SpatialStaticFile]);
export var StaticFileS3SourceOptions = struct(n0, _SFSSO, 0, [_BNu, _OK, _Reg], [0, 0, 0]);
export var StaticFileSource = struct(
  n0,
  _SFS,
  0,
  [_UOr, _SOpt],
  [() => StaticFileUrlSourceOptions, () => StaticFileS3SourceOptions]
);
export var StaticFileUrlSourceOptions = struct(n0, _SFUSO, 0, [_Ur], [0]);
export var StringDefaultValues = struct(
  n0,
  _SDVt,
  0,
  [_DVy, _SVta],
  [() => DynamicDefaultValue, [() => StringDefaultValueList, 0]]
);
export var StringFormatConfiguration = struct(
  n0,
  _SFCt,
  0,
  [_NVFC, _NFC],
  [
    [() => NullValueFormatConfiguration, 0],
    [() => NumericFormatConfiguration, 0],
  ]
);
export var StringParameter = struct(n0, _SPtr, 0, [_N, _Va], [0, [() => SensitiveStringList, 0]]);
export var StringParameterDeclaration = struct(
  n0,
  _SPD,
  0,
  [_PVT, _N, _DVef, _VWU, _MDSP],
  [0, 0, [() => StringDefaultValues, 0], [() => StringValueWhenUnsetConfiguration, 0], () => MappedDataSetParameters]
);
export var StringValueWhenUnsetConfiguration = struct(n0, _SVWUC, 0, [_VWUO, _CVus], [0, [() => SensitiveString, 0]]);
export var SubtotalOptions = struct(
  n0,
  _SOu,
  0,
  [_TV, _CL, _FL, _FLO, _TCS, _VCS, _MHCS, _STt],
  [
    0,
    0,
    0,
    () => PivotTableFieldSubtotalOptionsList,
    () => TableCellStyle,
    () => TableCellStyle,
    () => TableCellStyle,
    () => TableStyleTargetList,
  ]
);
export var TableAggregatedFieldWells = struct(
  n0,
  _TAFW,
  0,
  [_GB, _Va],
  [() => DimensionFieldList, () => MeasureFieldList]
);
export var TableBorderOptions = struct(n0, _TBO, 0, [_Col, _Thi, _Sty], [0, 1, 0]);
export var TableCellConditionalFormatting = struct(n0, _TCCF, 0, [_FIi, _TFex], [0, () => TextConditionalFormat]);
export var TableCellImageSizingConfiguration = struct(n0, _TCISC, 0, [_TCISCa], [0]);
export var TableCellStyle = struct(
  n0,
  _TCSa,
  0,
  [_Vi, _FCo, _TW, _HTA, _VTA, _BCa, _He, _Bor],
  [0, () => FontConfiguration, 0, 0, 0, 0, 1, () => GlobalTableBorderOptions]
);
export var TableConditionalFormatting = struct(n0, _TCF, 0, [_CFO], [() => TableConditionalFormattingOptionList]);
export var TableConditionalFormattingOption = struct(
  n0,
  _TCFO,
  0,
  [_Ce, _Row_],
  [() => TableCellConditionalFormatting, () => TableRowConditionalFormatting]
);
export var TableConfiguration = struct(
  n0,
  _TCa,
  0,
  [_FW, _SCo, _TOa, _TOot, _FOi, _PRO, _TIV, _I],
  [
    () => TableFieldWells,
    () => TableSortConfiguration,
    () => TableOptions,
    () => TotalOptions,
    () => TableFieldOptions,
    () => TablePaginatedReportOptions,
    () => TableInlineVisualizationList,
    () => VisualInteractionOptions,
  ]
);
export var TableFieldCustomIconContent = struct(n0, _TFCIC, 0, [_Ic], [0]);
export var TableFieldCustomTextContent = struct(n0, _TFCTC, 0, [_V, _FCo], [0, () => FontConfiguration]);
export var TableFieldImageConfiguration = struct(n0, _TFIC, 0, [_SOi], [() => TableCellImageSizingConfiguration]);
export var TableFieldLinkConfiguration = struct(
  n0,
  _TFLC,
  0,
  [_Tar, _Con],
  [0, () => TableFieldLinkContentConfiguration]
);
export var TableFieldLinkContentConfiguration = struct(
  n0,
  _TFLCC,
  0,
  [_CTC, _CIC],
  [() => TableFieldCustomTextContent, () => TableFieldCustomIconContent]
);
export var TableFieldOption = struct(
  n0,
  _TFO,
  0,
  [_FIi, _Wi, _CL, _Vi, _URLS],
  [0, 0, 0, 0, () => TableFieldURLConfiguration]
);
export var TableFieldOptions = struct(
  n0,
  _TFOa,
  0,
  [_SFO, _Ord, _PFO, _TTO],
  [() => TableFieldOptionList, 64 | 0, () => TablePinnedFieldOptions, () => TransposedTableOptionList]
);
export var TableFieldURLConfiguration = struct(
  n0,
  _TFURLC,
  0,
  [_LCi, _IC],
  [() => TableFieldLinkConfiguration, () => TableFieldImageConfiguration]
);
export var TableFieldWells = struct(
  n0,
  _TFW,
  0,
  [_TAFW, _TUFW],
  [() => TableAggregatedFieldWells, () => TableUnaggregatedFieldWells]
);
export var TableInlineVisualization = struct(n0, _TIVa, 0, [_DB], [() => DataBarsOptions]);
export var TableOptions = struct(
  n0,
  _TOa,
  0,
  [_Or, _HSe, _CSe, _RACO],
  [0, () => TableCellStyle, () => TableCellStyle, () => RowAlternateColorOptions]
);
export var TablePaginatedReportOptions = struct(n0, _TPRO, 0, [_VOV, _OCHV], [0, 0]);
export var TablePinnedFieldOptions = struct(n0, _TPFO, 0, [_PLF], [64 | 0]);
export var TableRowConditionalFormatting = struct(
  n0,
  _TRCF,
  0,
  [_BCa, _TC],
  [() => ConditionalFormattingColor, () => ConditionalFormattingColor]
);
export var TableSideBorderOptions = struct(
  n0,
  _TSBO,
  0,
  [_IVnn, _IH, _Lef, _Ri, _Top_, _Bot],
  [
    () => TableBorderOptions,
    () => TableBorderOptions,
    () => TableBorderOptions,
    () => TableBorderOptions,
    () => TableBorderOptions,
    () => TableBorderOptions,
  ]
);
export var TableSortConfiguration = struct(
  n0,
  _TSC,
  0,
  [_RSow, _PC],
  [() => RowSortList, () => PaginationConfiguration]
);
export var TableStyleTarget = struct(n0, _TST, 0, [_CTe], [0]);
export var TableUnaggregatedFieldWells = struct(n0, _TUFW, 0, [_Va], [() => TableUnaggregatedFieldList]);
export var TableVisual = struct(
  n0,
  _TVab,
  0,
  [_VI, _Tit, _Su, _CCh, _CFon, _Ac, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => TableConfiguration,
    () => TableConditionalFormatting,
    () => VisualCustomActionList,
    0,
  ]
);
export var TemplateSourceAnalysis = struct(n0, _TSA, 0, [_Ar, _DSR], [0, () => DataSetReferenceList]);
export var TemplateSourceEntity = struct(
  n0,
  _TSE,
  0,
  [_SAo, _STo],
  [() => TemplateSourceAnalysis, () => TemplateSourceTemplate]
);
export var TemplateSourceTemplate = struct(n0, _TSTe, 0, [_Ar], [0]);
export var TemplateVersionDefinition = struct(
  n0,
  _TVD,
  0,
  [_DSCata, _Sh, _CF, _PD, _FG, _CC, _AD, _O, _QEO, _SF],
  [
    () => DataSetConfigurationList,
    () => SheetDefinitionList,
    [() => CalculatedFields, 0],
    [() => ParameterDeclarationList, 0],
    [() => FilterGroupList, 0],
    [() => ColumnConfigurationList, 0],
    () => AnalysisDefaults,
    () => AssetOptions,
    () => QueryExecutionOptions,
    () => StaticFileList,
  ]
);
export var TextAreaControlDisplayOptions = struct(
  n0,
  _TACDO,
  0,
  [_TO, _POl, _IILO],
  [() => LabelOptions, () => TextControlPlaceholderOptions, () => SheetControlInfoIconLabelOptions]
);
export var TextBoxInteractionOptions = struct(n0, _TBIO, 0, [_TBMO], [() => TextBoxMenuOption]);
export var TextBoxMenuOption = struct(n0, _TBMO, 0, [_ASv], [0]);
export var TextConditionalFormat = struct(
  n0,
  _TCFe,
  0,
  [_BCa, _TC, _Ic],
  [
    [() => ConditionalFormattingColor, 0],
    [() => ConditionalFormattingColor, 0],
    [() => ConditionalFormattingIcon, 0],
  ]
);
export var TextControlPlaceholderOptions = struct(n0, _TCPO, 0, [_Vi], [0]);
export var TextFieldControlDisplayOptions = struct(
  n0,
  _TFCDO,
  0,
  [_TO, _POl, _IILO],
  [() => LabelOptions, () => TextControlPlaceholderOptions, () => SheetControlInfoIconLabelOptions]
);
export var ThousandSeparatorOptions = struct(n0, _TSO, 0, [_Sym, _Vi, _GSro], [0, 0, 0]);
export var TimeBasedForecastProperties = struct(n0, _TBFP, 0, [_PFe, _PB, _UB, _LB, _PIre, _Sea], [1, 1, 1, 1, 1, 1]);
export var TimeEqualityFilter = struct(
  n0,
  _TEF,
  0,
  [_FIil, _C, _V, _PN, _TG, _RD, _DFCC],
  [0, () => ColumnIdentifier, 4, 0, 0, [() => RollingDateConfiguration, 0], () => DefaultFilterControlConfiguration]
);
export var TimeRangeDrillDownFilter = struct(n0, _TRDDF, 0, [_C, _RM, _RMa, _TG], [() => ColumnIdentifier, 4, 4, 0]);
export var TimeRangeFilter = struct(
  n0,
  _TRF,
  0,
  [_FIil, _C, _IMn, _IMnc, _RMV, _RMVa, _NO, _EPC, _TG, _DFCC],
  [
    0,
    () => ColumnIdentifier,
    2,
    2,
    [() => TimeRangeFilterValue, 0],
    [() => TimeRangeFilterValue, 0],
    0,
    () => ExcludePeriodConfiguration,
    0,
    () => DefaultFilterControlConfiguration,
  ]
);
export var TimeRangeFilterValue = struct(
  n0,
  _TRFV,
  0,
  [_SVtat, _RD, _Para],
  [4, [() => RollingDateConfiguration, 0], 0]
);
export var TooltipItem = struct(n0, _TIoo, 0, [_FTI, _CTI], [() => FieldTooltipItem, () => ColumnTooltipItem]);
export var TooltipOptions = struct(n0, _TOo, 0, [_TVo, _STT, _FBT], [0, 0, () => FieldBasedTooltip]);
export var TopBottomFilter = struct(
  n0,
  _TBF,
  0,
  [_FIil, _C, _Li, _ASCg, _TG, _PN, _DFCC],
  [0, () => ColumnIdentifier, 1, () => AggregationSortConfigurationList, 0, 0, () => DefaultFilterControlConfiguration]
);
export var TopBottomMoversComputation = struct(
  n0,
  _TBMC,
  0,
  [_CIom, _N, _Tim, _Ca, _V, _MSo, _SOo, _T],
  [0, 0, () => DimensionField, () => DimensionField, () => MeasureField, 1, 0, 0]
);
export var TopBottomRankedComputation = struct(
  n0,
  _TBRC,
  0,
  [_CIom, _N, _Ca, _V, _RSesu, _T],
  [0, 0, () => DimensionField, () => MeasureField, 1, 0]
);
export var TotalAggregationComputation = struct(n0, _TACo, 0, [_CIom, _N, _V], [0, 0, () => MeasureField]);
export var TotalAggregationFunction = struct(n0, _TAF, 0, [_STAF], [0]);
export var TotalAggregationOption = struct(n0, _TAOo, 0, [_FIi, _TAF], [0, () => TotalAggregationFunction]);
export var TotalOptions = struct(
  n0,
  _TOot,
  0,
  [_TV, _Pla, _SSc, _CL, _TCS, _TAO],
  [0, 0, 0, 0, () => TableCellStyle, () => TotalAggregationOptionList]
);
export var TransposedTableOption = struct(n0, _TTOr, 0, [_CIol, _CW, _CTolu], [1, 0, 0]);
export var TreeMapAggregatedFieldWells = struct(
  n0,
  _TMAFW,
  0,
  [_Gro, _Siz, _Co],
  [() => TreeMapDimensionFieldList, () => TreeMapMeasureFieldList, () => TreeMapMeasureFieldList]
);
export var TreeMapConfiguration = struct(
  n0,
  _TMC,
  0,
  [_FW, _SCo, _GLO, _SLOi, _CLOo, _CSol, _Le, _DL, _To, _I],
  [
    () => TreeMapFieldWells,
    () => TreeMapSortConfiguration,
    () => ChartAxisLabelOptions,
    () => ChartAxisLabelOptions,
    () => ChartAxisLabelOptions,
    () => ColorScale,
    () => LegendOptions,
    () => DataLabelOptions,
    () => TooltipOptions,
    () => VisualInteractionOptions,
  ]
);
export var TreeMapFieldWells = struct(n0, _TMFW, 0, [_TMAFW], [() => TreeMapAggregatedFieldWells]);
export var TreeMapSortConfiguration = struct(
  n0,
  _TMSC,
  0,
  [_TMS, _TMGILC],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration]
);
export var TreeMapVisual = struct(
  n0,
  _TMV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => TreeMapConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var TrendArrowOptions = struct(n0, _TAOr, 0, [_Vi], [0]);
export var UnaggregatedField = struct(
  n0,
  _UF,
  0,
  [_FIi, _C, _FCor],
  [0, () => ColumnIdentifier, [() => FormatConfiguration, 0]]
);
export var UniqueValuesComputation = struct(n0, _UVC, 0, [_CIom, _N, _Ca], [0, 0, () => DimensionField]);
export var UpdateAnalysisRequest = struct(
  n0,
  _UAR,
  0,
  [_AAI, _AIn, _N, _Par, _SE, _TA, _Def, _VSa],
  [
    [0, 1],
    [0, 1],
    0,
    [() => _Parameters, 0],
    () => AnalysisSourceEntity,
    0,
    [() => AnalysisDefinition, 0],
    () => ValidationStrategy,
  ]
);
export var UpdateAnalysisResponse = struct(n0, _UARp, 0, [_Ar, _AIn, _USpd, _St, _RI], [0, 0, 0, [1, 32], 0]);
export var UpdateDashboardRequest = struct(
  n0,
  _UDR,
  0,
  [_AAI, _DI, _N, _SE, _Par, _VD, _DPO, _TA, _Def, _VSa],
  [
    [0, 1],
    [0, 1],
    0,
    () => DashboardSourceEntity,
    [() => _Parameters, 0],
    0,
    () => DashboardPublishOptions,
    0,
    [() => DashboardVersionDefinition, 0],
    () => ValidationStrategy,
  ]
);
export var UpdateDashboardResponse = struct(n0, _UDRp, 0, [_Ar, _VAe, _DI, _CSr, _St, _RI], [0, 0, 0, 0, 1, 0]);
export var UpdateTemplateRequest = struct(
  n0,
  _UTR,
  0,
  [_AAI, _TIe, _SE, _VD, _N, _Def, _VSa],
  [[0, 1], [0, 1], () => TemplateSourceEntity, 0, 0, [() => TemplateVersionDefinition, 0], () => ValidationStrategy]
);
export var UpdateTemplateResponse = struct(n0, _UTRp, 0, [_TIe, _Ar, _VAe, _CSr, _St, _RI], [0, 0, 0, 0, [1, 32], 0]);
export var ValidationStrategy = struct(n0, _VSa, 0, [_Mo], [0]);
export var VisibleRangeOptions = struct(n0, _VRO, 0, [_PRe], [() => PercentVisibleRange]);
export var Visual = struct(
  n0,
  _Visu,
  0,
  [
    _TVab,
    _PTV,
    _BCV,
    _KPIV,
    _PCV,
    _GCV,
    _LCV,
    _HMV,
    _TMV,
    _GMV,
    _FMV,
    _LMV,
    _FCV,
    _SPV,
    _CCV,
    _BPV,
    _WV,
    _HV,
    _WCV,
    _IVn,
    _SDV,
    _CCVu,
    _EV,
    _RCV,
    _PVl,
  ],
  [
    () => TableVisual,
    () => PivotTableVisual,
    () => BarChartVisual,
    () => KPIVisual,
    () => PieChartVisual,
    () => GaugeChartVisual,
    () => LineChartVisual,
    () => HeatMapVisual,
    () => TreeMapVisual,
    () => GeospatialMapVisual,
    () => FilledMapVisual,
    () => LayerMapVisual,
    () => FunnelChartVisual,
    () => ScatterPlotVisual,
    () => ComboChartVisual,
    () => BoxPlotVisual,
    () => WaterfallVisual,
    () => HistogramVisual,
    () => WordCloudVisual,
    () => InsightVisual,
    () => SankeyDiagramVisual,
    () => CustomContentVisual,
    () => EmptyVisual,
    () => RadarChartVisual,
    () => PluginVisual,
  ]
);
export var VisualAxisSortOption = struct(n0, _VASO, 0, [_ASv], [0]);
export var VisualCustomAction = struct(
  n0,
  _VCA,
  0,
  [_CAI, _N, _St, _Tr, _AOc],
  [0, 0, 0, 0, () => VisualCustomActionOperationList]
);
export var VisualCustomActionDefaults = struct(n0, _VCAD, 0, [_hO], [() => VisualHighlightOperation]);
export var VisualCustomActionOperation = struct(
  n0,
  _VCAO,
  0,
  [_FO, _NOa, _URLO, _SPO],
  [
    () => CustomActionFilterOperation,
    () => CustomActionNavigationOperation,
    () => CustomActionURLOperation,
    () => CustomActionSetParametersOperation,
  ]
);
export var VisualHighlightOperation = struct(n0, _VHO, 0, [_Tr], [0]);
export var VisualInteractionOptions = struct(
  n0,
  _VIO,
  0,
  [_VMO, _CMO],
  [() => VisualMenuOption, () => ContextMenuOption]
);
export var VisualMenuOption = struct(n0, _VMO, 0, [_ASv], [0]);
export var VisualPalette = struct(n0, _VP, 0, [_CCha, _CMol], [0, () => DataPathColorList]);
export var VisualSubtitleLabelOptions = struct(n0, _VSLO, 0, [_Vi, _FTor], [0, () => LongFormatText]);
export var VisualTitleLabelOptions = struct(n0, _VTLO, 0, [_Vi, _FTor], [0, () => ShortFormatText]);
export var WaterfallChartAggregatedFieldWells = struct(
  n0,
  _WCAFW,
  0,
  [_Cate, _Va, _Bre],
  [() => DimensionFieldList, () => MeasureFieldList, () => DimensionFieldList]
);
export var WaterfallChartColorConfiguration = struct(
  n0,
  _WCCC,
  0,
  [_GCCr],
  [() => WaterfallChartGroupColorConfiguration]
);
export var WaterfallChartConfiguration = struct(
  n0,
  _WCC,
  0,
  [_FW, _SCo, _WCO, _CALOa, _CADOa, _PYALO, _PYADO, _Le, _DL, _VP, _CColo, _I],
  [
    () => WaterfallChartFieldWells,
    () => WaterfallChartSortConfiguration,
    () => WaterfallChartOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => ChartAxisLabelOptions,
    () => AxisDisplayOptions,
    () => LegendOptions,
    () => DataLabelOptions,
    () => VisualPalette,
    () => WaterfallChartColorConfiguration,
    () => VisualInteractionOptions,
  ]
);
export var WaterfallChartFieldWells = struct(n0, _WCFW, 0, [_WCAFW], [() => WaterfallChartAggregatedFieldWells]);
export var WaterfallChartGroupColorConfiguration = struct(n0, _WCGCC, 0, [_PBCo, _NBC, _TBC], [0, 0, 0]);
export var WaterfallChartOptions = struct(n0, _WCO, 0, [_TBLo], [0]);
export var WaterfallChartSortConfiguration = struct(
  n0,
  _WCSC,
  0,
  [_CS, _BIL],
  [() => FieldSortOptionsList, () => ItemsLimitConfiguration]
);
export var WaterfallVisual = struct(
  n0,
  _WV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => WaterfallChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var WhatIfPointScenario = struct(n0, _WIPS, 0, [_Date, _V], [4, 1]);
export var WhatIfRangeScenario = struct(n0, _WIRS, 0, [_SDt, _EDn, _V], [4, 4, 1]);
export var WordCloudAggregatedFieldWells = struct(
  n0,
  _WCAFWo,
  0,
  [_GB, _Si],
  [() => WordCloudDimensionFieldList, () => WordCloudMeasureFieldList]
);
export var WordCloudChartConfiguration = struct(
  n0,
  _WCCCo,
  0,
  [_FW, _SCo, _CLO, _WCOo, _I],
  [
    () => WordCloudFieldWells,
    () => WordCloudSortConfiguration,
    () => ChartAxisLabelOptions,
    () => WordCloudOptions,
    () => VisualInteractionOptions,
  ]
);
export var WordCloudFieldWells = struct(n0, _WCFWo, 0, [_WCAFWo], [() => WordCloudAggregatedFieldWells]);
export var WordCloudOptions = struct(n0, _WCOo, 0, [_WOo, _WSo, _CLl, _WC, _WP, _MSL], [0, 0, 0, 0, 0, 1]);
export var WordCloudSortConfiguration = struct(
  n0,
  _WCSCo,
  0,
  [_CIL, _CS],
  [() => ItemsLimitConfiguration, () => FieldSortOptionsList]
);
export var WordCloudVisual = struct(
  n0,
  _WCV,
  0,
  [_VI, _Tit, _Su, _CCh, _Ac, _CH, _VCAT],
  [
    0,
    () => VisualTitleLabelOptions,
    () => VisualSubtitleLabelOptions,
    () => WordCloudChartConfiguration,
    () => VisualCustomActionList,
    () => ColumnHierarchyList,
    0,
  ]
);
export var YAxisOptions = struct(n0, _YAO, 0, [_YA], [0]);
export var AggregationSortConfigurationList = list(n0, _ASCL, 0, () => AggregationSortConfiguration);
export var AxisLabelOptionsList = list(n0, _ALOL, 0, () => AxisLabelOptions);
export var BodySectionConfigurationList = list(n0, _BSCL, 0, () => BodySectionConfiguration);
export var BodySectionDynamicDimensionSortConfigurationList = list(n0, _BSDDSCL, 0, () => ColumnSort);
export var BodySectionRepeatDimensionConfigurationList = list(
  n0,
  _BSRDCL,
  0,
  () => BodySectionRepeatDimensionConfiguration
);
export var BoxPlotDimensionFieldList = list(n0, _BPDFL, 0, () => DimensionField);
export var BoxPlotMeasureFieldList = list(n0, _BPMFL, 0, () => MeasureField);
export var CalculatedFields = list(n0, _CF, 0, [() => CalculatedField, 0]);
export var CascadingControlSourceList = list(n0, _CCSL, 0, () => CascadingControlSource);
export var CategoryValueList = 64 | 0;

export var ColorScaleColorList = list(n0, _CSCL, 0, () => DataColor);
export var ColumnConfigurationList = list(n0, _CCLo, 0, [() => ColumnConfiguration, 0]);
export var ColumnHierarchyList = list(n0, _CHL, 0, () => ColumnHierarchy);
export var ComputationList = list(n0, _CLo, 0, () => Computation);
export var ContributionAnalysisDefaultList = list(n0, _CADL, 0, () => ContributionAnalysisDefault);
export var ContributorDimensionList = list(n0, _CDL, 0, () => ColumnIdentifier);
export var CustomActionColumnList = list(n0, _CACL, 0, () => ColumnIdentifier);
export var CustomColorsList = list(n0, _CCLu, 0, [() => CustomColor, 0]);
export var DataLabelTypes = list(n0, _DLT, 0, () => DataLabelType);
export var DataPathColorList = list(n0, _DPCL, 0, () => DataPathColor);
export var DataPathValueList = list(n0, _DPVL, 0, [() => DataPathValue, 0]);
export var DataSetIdentifierDeclarationList = list(n0, _DSIDL, 0, () => DataSetIdentifierDeclaration);
export var DataSetReferenceList = list(n0, _DSRL, 0, () => DataSetReference);
export var DateTimeParameterList = list(n0, _DTPL, 0, [() => DateTimeParameter, 0]);
export var DecimalParameterList = list(n0, _DPLe, 0, [() => DecimalParameter, 0]);
export var DimensionFieldList = list(n0, _DFL, 0, () => DimensionField);
export var DrillDownFilterList = list(n0, _DDFL, 0, () => DrillDownFilter);
export var ExplicitHierarchyColumnList = list(n0, _EHCL, 0, () => ColumnIdentifier);
export var FieldOrderList = 64 | 0;

export var FieldSortOptionsList = list(n0, _FSOL, 0, () => FieldSortOptions);
export var FilledMapConditionalFormattingOptionList = list(n0, _FMCFOL, 0, () => FilledMapConditionalFormattingOption);
export var FilledMapDimensionFieldList = list(n0, _FMDFL, 0, () => DimensionField);
export var FilledMapMeasureFieldList = list(n0, _FMMFL, 0, () => MeasureField);
export var FilterControlList = list(n0, _FCL, 0, () => FilterControl);
export var FilteredVisualsList = 64 | 0;

export var FilterGroupList = list(n0, _FGL, 0, [() => FilterGroup, 0]);
export var FilterList = list(n0, _FLi, 0, [() => Filter, 0]);
export var ForecastConfigurationList = list(n0, _FCLo, 0, () => ForecastConfiguration);
export var FreeFromLayoutElementList = list(n0, _FFLEL, 0, () => FreeFormLayoutElement);
export var FunnelChartDimensionFieldList = list(n0, _FCDFL, 0, () => DimensionField);
export var FunnelChartMeasureFieldList = list(n0, _FCMFL, 0, () => MeasureField);
export var GaugeChartConditionalFormattingOptionList = list(
  n0,
  _GCCFOL,
  0,
  () => GaugeChartConditionalFormattingOption
);
export var GeospatialCategoricalDataColorList = list(n0, _GCDCL, 0, () => GeospatialCategoricalDataColor);
export var GeospatialGradientStepColorList = list(n0, _GGSCL, 0, () => GeospatialGradientStepColor);
export var GeospatialHeatmapDataColorList = list(n0, _GHDCL, 0, () => GeospatialHeatmapDataColor);
export var GeospatialLayerDimensionFieldList = list(n0, _GLDFL, 0, [() => DimensionField, 0]);
export var GeospatialLayerMeasureFieldList = list(n0, _GLMFL, 0, [() => MeasureField, 0]);
export var GeospatialMapLayerList = list(n0, _GMLL, 0, () => GeospatialLayerItem);
export var GradientStopList = list(n0, _GSL, 0, () => GradientStop);
export var GridLayoutElementList = list(n0, _GLEL, 0, () => GridLayoutElement);
export var HeaderFooterSectionConfigurationList = list(n0, _HFSCL, 0, () => HeaderFooterSectionConfiguration);
export var HeatMapDimensionFieldList = list(n0, _HMDFL, 0, () => DimensionField);
export var HeatMapMeasureFieldList = list(n0, _HMMFL, 0, () => MeasureField);
export var HistogramMeasureFieldList = list(n0, _HMFL, 0, () => MeasureField);
export var IntegerParameterList = list(n0, _IPL, 0, [() => IntegerParameter, 0]);
export var KPIConditionalFormattingOptionList = list(n0, _KPICFOL, 0, () => KPIConditionalFormattingOption);
export var LayerCustomActionList = list(n0, _LCAL, 0, () => LayerCustomAction);
export var LayerCustomActionOperationList = list(n0, _LCAOL, 0, () => LayerCustomActionOperation);
export var LayoutList = list(n0, _LLa, 0, () => Layout);
export var MappedDataSetParameters = list(n0, _MDSP, 0, () => MappedDataSetParameter);
export var MeasureFieldList = list(n0, _MFLe, 0, () => MeasureField);
export var MissingDataConfigurationList = list(n0, _MDCL, 0, () => MissingDataConfiguration);
export var NonRepeatingVisualsList = 64 | 0;

export var ParameterControlList = list(n0, _PCL, 0, () => ParameterControl);
export var ParameterDeclarationList = list(n0, _PDL, 0, [() => ParameterDeclaration, 0]);
export var ParameterSelectableValueList = 64 | 0;

export var PivotFieldSortOptionsList = list(n0, _PFSOL, 0, () => PivotFieldSortOptions);
export var PivotMeasureFieldList = list(n0, _PMFL, 0, () => MeasureField);
export var PivotTableConditionalFormattingOptionList = list(
  n0,
  _PTCFOL,
  0,
  () => PivotTableConditionalFormattingOption
);
export var PivotTableConditionalFormattingScopeList = list(n0, _PTCFSL, 0, () => PivotTableConditionalFormattingScope);
export var PivotTableDataPathOptionList = list(n0, _PTDPOL, 0, () => PivotTableDataPathOption);
export var PivotTableDimensionList = list(n0, _PTDL, 0, () => DimensionField);
export var PivotTableFieldCollapseStateOptionList = list(n0, _PTFCSOL, 0, () => PivotTableFieldCollapseStateOption);
export var PivotTableFieldOptionList = list(n0, _PTFOL, 0, () => PivotTableFieldOption);
export var PivotTableFieldSubtotalOptionsList = list(n0, _PTFSOL, 0, () => PivotTableFieldSubtotalOptions);
export var PluginVisualFieldWells = list(n0, _PVFWl, 0, () => PluginVisualFieldWell);
export var PluginVisualPropertiesList = list(n0, _PVPL, 0, () => PluginVisualProperty);
export var PredefinedHierarchyColumnList = list(n0, _PHCL, 0, () => ColumnIdentifier);
export var RadarChartCategoryFieldList = list(n0, _RCCFL, 0, () => DimensionField);
export var RadarChartColorFieldList = list(n0, _RCCFLa, 0, () => DimensionField);
export var RadarChartValuesFieldList = list(n0, _RCVFL, 0, () => MeasureField);
export var ReferenceLineList = list(n0, _RLL, 0, () => ReferenceLine);
export var RowAlternateColorList = 64 | 0;

export var RowSortList = list(n0, _RSL, 0, () => FieldSortOptions);
export var SelectedFieldList = 64 | 0;

export var SensitiveDoubleList = list(n0, _SDL, 0, [() => SensitiveDouble, 0]);
export var SensitiveLongList = list(n0, _SLL, 0, [() => SensitiveLong, 0]);
export var SensitiveTimestampList = list(n0, _STL, 0, [() => SensitiveTimestamp, 0]);
export var SeriesItemList = list(n0, _SILe, 0, () => SeriesItem);
export var SessionTagKeyList = 64 | 0;

export var SheetControlLayoutList = list(n0, _SCLL, 0, () => SheetControlLayout);
export var SheetDefinitionList = list(n0, _SDLh, 0, () => SheetDefinition);
export var SheetElementRenderingRuleList = list(n0, _SERRL, 0, () => SheetElementRenderingRule);
export var SheetTextBoxList = list(n0, _STBL, 0, () => SheetTextBox);
export var SheetVisualScopingConfigurations = list(n0, _SVSC, 0, () => SheetVisualScopingConfiguration);
export var SmallMultiplesDimensionFieldList = list(n0, _SMDFL, 0, () => DimensionField);
export var SnapshotAnonymousUserList = list(n0, _SAUL, 0, [() => SnapshotAnonymousUser, 0]);
export var SnapshotAnonymousUserRedactedList = list(n0, _SAURL, 0, () => SnapshotAnonymousUserRedacted);
export var SnapshotFileGroupList = list(n0, _SFGL, 0, () => SnapshotFileGroup);
export var SnapshotS3DestinationConfigurationList = list(n0, _SSDCL, 0, () => SnapshotS3DestinationConfiguration);
export var StaticFileList = list(n0, _SFLt, 0, () => StaticFile);
export var StringParameterList = list(n0, _SPL, 0, [() => StringParameter, 0]);
export var TableConditionalFormattingOptionList = list(n0, _TCFOL, 0, () => TableConditionalFormattingOption);
export var TableFieldOptionList = list(n0, _TFOL, 0, () => TableFieldOption);
export var TableFieldOrderList = 64 | 0;

export var TableInlineVisualizationList = list(n0, _TIVL, 0, () => TableInlineVisualization);
export var TableStyleTargetList = list(n0, _TSTL, 0, () => TableStyleTarget);
export var TableUnaggregatedFieldList = list(n0, _TUFL, 0, () => UnaggregatedField);
export var TargetVisualList = 64 | 0;

export var TooltipItemList = list(n0, _TIL, 0, () => TooltipItem);
export var TotalAggregationOptionList = list(n0, _TAOL, 0, () => TotalAggregationOption);
export var TransposedTableOptionList = list(n0, _TTOL, 0, () => TransposedTableOption);
export var TreeMapDimensionFieldList = list(n0, _TMDFL, 0, () => DimensionField);
export var TreeMapMeasureFieldList = list(n0, _TMMFL, 0, () => MeasureField);
export var UnaggregatedFieldList = list(n0, _UFL, 0, () => UnaggregatedField);
export var VisualCustomActionList = list(n0, _VCAL, 0, () => VisualCustomAction);
export var VisualCustomActionOperationList = list(n0, _VCAOL, 0, () => VisualCustomActionOperation);
export var VisualList = list(n0, _VLi, 0, () => Visual);
export var WordCloudDimensionFieldList = list(n0, _WCDFL, 0, () => DimensionField);
export var WordCloudMeasureFieldList = list(n0, _WCMFL, 0, () => MeasureField);
export var CreateAnalysis = op(
  n0,
  _CAr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/analyses/{AnalysisId}", 200],
  },
  () => CreateAnalysisRequest,
  () => CreateAnalysisResponse
);
export var CreateDashboard = op(
  n0,
  _CDre,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/dashboards/{DashboardId}", 200],
  },
  () => CreateDashboardRequest,
  () => CreateDashboardResponse
);
export var CreateTemplate = op(
  n0,
  _CTr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/templates/{TemplateId}", 200],
  },
  () => CreateTemplateRequest,
  () => CreateTemplateResponse
);
export var DescribeAnalysisDefinition = op(
  n0,
  _DAD,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/analyses/{AnalysisId}/definition", 200],
  },
  () => DescribeAnalysisDefinitionRequest,
  () => DescribeAnalysisDefinitionResponse
);
export var DescribeDashboardDefinition = op(
  n0,
  _DDD,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/definition", 200],
  },
  () => DescribeDashboardDefinitionRequest,
  () => DescribeDashboardDefinitionResponse
);
export var DescribeDashboardSnapshotJob = op(
  n0,
  _DDSJ,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}", 200],
  },
  () => DescribeDashboardSnapshotJobRequest,
  () => DescribeDashboardSnapshotJobResponse
);
export var DescribeTemplateDefinition = op(
  n0,
  _DTD,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/templates/{TemplateId}/definition", 200],
  },
  () => DescribeTemplateDefinitionRequest,
  () => DescribeTemplateDefinitionResponse
);
export var StartDashboardSnapshotJob = op(
  n0,
  _SDSJ,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs", 200],
  },
  () => StartDashboardSnapshotJobRequest,
  () => StartDashboardSnapshotJobResponse
);
export var UpdateAnalysis = op(
  n0,
  _UAp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/analyses/{AnalysisId}", 200],
  },
  () => UpdateAnalysisRequest,
  () => UpdateAnalysisResponse
);
export var UpdateDashboard = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/dashboards/{DashboardId}", 200],
  },
  () => UpdateDashboardRequest,
  () => UpdateDashboardResponse
);
export var UpdateTemplate = op(
  n0,
  _UT,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/templates/{TemplateId}", 200],
  },
  () => UpdateTemplateRequest,
  () => UpdateTemplateResponse
);
