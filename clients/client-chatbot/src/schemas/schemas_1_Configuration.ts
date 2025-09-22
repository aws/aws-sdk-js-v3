// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  CreateChimeWebhookConfigurationException as __CreateChimeWebhookConfigurationException,
  CreateSlackChannelConfigurationException as __CreateSlackChannelConfigurationException,
  CreateTeamsChannelConfigurationException as __CreateTeamsChannelConfigurationException,
  DescribeChimeWebhookConfigurationsException as __DescribeChimeWebhookConfigurationsException,
  DescribeSlackChannelConfigurationsException as __DescribeSlackChannelConfigurationsException,
  GetTeamsChannelConfigurationException as __GetTeamsChannelConfigurationException,
  ListTeamsChannelConfigurationsException as __ListTeamsChannelConfigurationsException,
  UpdateChimeWebhookConfigurationException as __UpdateChimeWebhookConfigurationException,
  UpdateSlackChannelConfigurationException as __UpdateSlackChannelConfigurationException,
  UpdateTeamsChannelConfigurationException as __UpdateTeamsChannelConfigurationException,
} from "../models/index";
import {
  _CCA,
  _CCh,
  _CCWC,
  _CCWCE,
  _CCWCR,
  _CCWCRr,
  _CI,
  _CMTCC,
  _CN,
  _CNh,
  _CSCC,
  _CSCCE,
  _CSCCR,
  _CSCCRr,
  _CTCCE,
  _CTCCR,
  _CTCCRr,
  _CWC,
  _CWCL,
  _CWD,
  _CWU,
  _DCWCe,
  _DCWCEe,
  _DCWCRes,
  _DCWCResc,
  _DSCCe,
  _DSCCEe,
  _DSCCRes,
  _DSCCResc,
  _e,
  _GMTCC,
  _GPA,
  _GTCCE,
  _GTCCR,
  _GTCCRe,
  _h,
  _hE,
  _IRA,
  _LL,
  _LMTCC,
  _LTCCE,
  _LTCCR,
  _LTCCRi,
  _M,
  _MR,
  _NTe,
  _S,
  _s,
  _SCC,
  _SCCL,
  _SCCl,
  _SCDN,
  _SCI,
  _SCN,
  _SR,
  _STA,
  _STI,
  _STN,
  _T,
  _TCC,
  _TCCe,
  _TCCL,
  _TCN,
  _TI,
  _TIe,
  _TN,
  _UAR,
  _UCWC,
  _UCWCE,
  _UCWCR,
  _UCWCRp,
  _UMTCC,
  _USCC,
  _USCCE,
  _USCCR,
  _USCCRp,
  _UTCCE,
  _UTCCR,
  _UTCCRp,
  _WC,
  _WCe,
  _WD,
  _WU,
  n0,
  Tag,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChimeWebhookDescription = sim(n0, _CWD, 0, 8);
export var ChimeWebhookUrl = sim(n0, _CWU, 0, 8);
export var SlackChannelDisplayName = sim(n0, _SCDN, 0, 8);
export var TeamName = sim(n0, _TN, 0, 8);
export var TeamsChannelName = sim(n0, _TCN, 0, 8);
export var ChimeWebhookConfiguration = struct(
  n0,
  _CWC,
  0,
  [_WD, _CCA, _IRA, _STA, _CN, _LL, _T, _S, _SR],
  [[() => ChimeWebhookDescription, 0], 0, 0, 64 | 0, 0, 0, () => Tags, 0, 0]
);
export var CreateChimeWebhookConfigurationException = error(
  n0,
  _CCWCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __CreateChimeWebhookConfigurationException
);
export var CreateChimeWebhookConfigurationRequest = struct(
  n0,
  _CCWCR,
  0,
  [_WD, _WU, _STA, _IRA, _CN, _LL, _T],
  [[() => ChimeWebhookDescription, 0], [() => ChimeWebhookUrl, 0], 64 | 0, 0, 0, 0, () => Tags]
);
export var CreateChimeWebhookConfigurationResult = struct(
  n0,
  _CCWCRr,
  0,
  [_WC],
  [[() => ChimeWebhookConfiguration, 0]]
);
export var CreateSlackChannelConfigurationException = error(
  n0,
  _CSCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __CreateSlackChannelConfigurationException
);
export var CreateSlackChannelConfigurationRequest = struct(
  n0,
  _CSCCR,
  0,
  [_STI, _SCI, _SCN, _STA, _IRA, _CN, _LL, _GPA, _UAR, _T],
  [0, 0, [() => SlackChannelDisplayName, 0], 64 | 0, 0, 0, 0, 64 | 0, 2, () => Tags]
);
export var CreateSlackChannelConfigurationResult = struct(
  n0,
  _CSCCRr,
  0,
  [_CCh],
  [[() => SlackChannelConfiguration, 0]]
);
export var CreateTeamsChannelConfigurationException = error(
  n0,
  _CTCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __CreateTeamsChannelConfigurationException
);
export var CreateTeamsChannelConfigurationRequest = struct(
  n0,
  _CTCCR,
  0,
  [_CI, _CNh, _TIe, _TN, _TI, _STA, _IRA, _CN, _LL, _GPA, _UAR, _T],
  [0, [() => TeamsChannelName, 0], 0, [() => TeamName, 0], 0, 64 | 0, 0, 0, 0, 64 | 0, 2, () => Tags]
);
export var CreateTeamsChannelConfigurationResult = struct(
  n0,
  _CTCCRr,
  0,
  [_CCh],
  [[() => TeamsChannelConfiguration, 0]]
);
export var DescribeChimeWebhookConfigurationsException = error(
  n0,
  _DCWCEe,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DescribeChimeWebhookConfigurationsException
);
export var DescribeChimeWebhookConfigurationsRequest = struct(n0, _DCWCRes, 0, [_MR, _NTe, _CCA], [1, 0, 0]);
export var DescribeChimeWebhookConfigurationsResult = struct(
  n0,
  _DCWCResc,
  0,
  [_NTe, _WCe],
  [0, [() => ChimeWebhookConfigurationList, 0]]
);
export var DescribeSlackChannelConfigurationsException = error(
  n0,
  _DSCCEe,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DescribeSlackChannelConfigurationsException
);
export var DescribeSlackChannelConfigurationsRequest = struct(n0, _DSCCRes, 0, [_MR, _NTe, _CCA], [1, 0, 0]);
export var DescribeSlackChannelConfigurationsResult = struct(
  n0,
  _DSCCResc,
  0,
  [_NTe, _SCC],
  [0, [() => SlackChannelConfigurationList, 0]]
);
export var GetTeamsChannelConfigurationException = error(
  n0,
  _GTCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __GetTeamsChannelConfigurationException
);
export var GetTeamsChannelConfigurationRequest = struct(n0, _GTCCR, 0, [_CCA], [0]);
export var GetTeamsChannelConfigurationResult = struct(n0, _GTCCRe, 0, [_CCh], [[() => TeamsChannelConfiguration, 0]]);
export var ListTeamsChannelConfigurationsException = error(
  n0,
  _LTCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __ListTeamsChannelConfigurationsException
);
export var ListTeamsChannelConfigurationsRequest = struct(n0, _LTCCR, 0, [_MR, _NTe, _TIe], [1, 0, 0]);
export var ListTeamsChannelConfigurationsResult = struct(
  n0,
  _LTCCRi,
  0,
  [_NTe, _TCC],
  [0, [() => TeamChannelConfigurationsList, 0]]
);
export var SlackChannelConfiguration = struct(
  n0,
  _SCCl,
  0,
  [_STN, _STI, _SCI, _SCN, _CCA, _IRA, _STA, _CN, _LL, _GPA, _UAR, _T, _S, _SR],
  [0, 0, 0, [() => SlackChannelDisplayName, 0], 0, 0, 64 | 0, 0, 0, 64 | 0, 2, () => Tags, 0, 0]
);
export var TeamsChannelConfiguration = struct(
  n0,
  _TCCe,
  0,
  [_CI, _CNh, _TIe, _TN, _TI, _CCA, _IRA, _STA, _CN, _LL, _GPA, _UAR, _T, _S, _SR],
  [0, [() => TeamsChannelName, 0], 0, [() => TeamName, 0], 0, 0, 0, 64 | 0, 0, 0, 64 | 0, 2, () => Tags, 0, 0]
);
export var UpdateChimeWebhookConfigurationException = error(
  n0,
  _UCWCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __UpdateChimeWebhookConfigurationException
);
export var UpdateChimeWebhookConfigurationRequest = struct(
  n0,
  _UCWCR,
  0,
  [_CCA, _WD, _WU, _STA, _IRA, _LL],
  [0, [() => ChimeWebhookDescription, 0], [() => ChimeWebhookUrl, 0], 64 | 0, 0, 0]
);
export var UpdateChimeWebhookConfigurationResult = struct(
  n0,
  _UCWCRp,
  0,
  [_WC],
  [[() => ChimeWebhookConfiguration, 0]]
);
export var UpdateSlackChannelConfigurationException = error(
  n0,
  _USCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __UpdateSlackChannelConfigurationException
);
export var UpdateSlackChannelConfigurationRequest = struct(
  n0,
  _USCCR,
  0,
  [_CCA, _SCI, _SCN, _STA, _IRA, _LL, _GPA, _UAR],
  [0, 0, [() => SlackChannelDisplayName, 0], 64 | 0, 0, 0, 64 | 0, 2]
);
export var UpdateSlackChannelConfigurationResult = struct(
  n0,
  _USCCRp,
  0,
  [_CCh],
  [[() => SlackChannelConfiguration, 0]]
);
export var UpdateTeamsChannelConfigurationException = error(
  n0,
  _UTCCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __UpdateTeamsChannelConfigurationException
);
export var UpdateTeamsChannelConfigurationRequest = struct(
  n0,
  _UTCCR,
  0,
  [_CCA, _CI, _CNh, _STA, _IRA, _LL, _GPA, _UAR],
  [0, 0, [() => TeamsChannelName, 0], 64 | 0, 0, 0, 64 | 0, 2]
);
export var UpdateTeamsChannelConfigurationResult = struct(
  n0,
  _UTCCRp,
  0,
  [_CCh],
  [[() => TeamsChannelConfiguration, 0]]
);
export var ChimeWebhookConfigurationList = list(n0, _CWCL, 0, [() => ChimeWebhookConfiguration, 0]);
export var GuardrailPolicyArnList = 64 | 0;

export var SlackChannelConfigurationList = list(n0, _SCCL, 0, [() => SlackChannelConfiguration, 0]);
export var SnsTopicArnList = 64 | 0;

export var Tags = list(n0, _T, 0, () => Tag);
export var TeamChannelConfigurationsList = list(n0, _TCCL, 0, [() => TeamsChannelConfiguration, 0]);
export var CreateChimeWebhookConfiguration = op(
  n0,
  _CCWC,
  {
    [_h]: ["POST", "/create-chime-webhook-configuration", 201],
  },
  () => CreateChimeWebhookConfigurationRequest,
  () => CreateChimeWebhookConfigurationResult
);
export var CreateMicrosoftTeamsChannelConfiguration = op(
  n0,
  _CMTCC,
  {
    [_h]: ["POST", "/create-ms-teams-channel-configuration", 201],
  },
  () => CreateTeamsChannelConfigurationRequest,
  () => CreateTeamsChannelConfigurationResult
);
export var CreateSlackChannelConfiguration = op(
  n0,
  _CSCC,
  {
    [_h]: ["POST", "/create-slack-channel-configuration", 201],
  },
  () => CreateSlackChannelConfigurationRequest,
  () => CreateSlackChannelConfigurationResult
);
export var DescribeChimeWebhookConfigurations = op(
  n0,
  _DCWCe,
  {
    [_h]: ["POST", "/describe-chime-webhook-configurations", 200],
  },
  () => DescribeChimeWebhookConfigurationsRequest,
  () => DescribeChimeWebhookConfigurationsResult
);
export var DescribeSlackChannelConfigurations = op(
  n0,
  _DSCCe,
  {
    [_h]: ["POST", "/describe-slack-channel-configurations", 200],
  },
  () => DescribeSlackChannelConfigurationsRequest,
  () => DescribeSlackChannelConfigurationsResult
);
export var GetMicrosoftTeamsChannelConfiguration = op(
  n0,
  _GMTCC,
  {
    [_h]: ["POST", "/get-ms-teams-channel-configuration", 200],
  },
  () => GetTeamsChannelConfigurationRequest,
  () => GetTeamsChannelConfigurationResult
);
export var ListMicrosoftTeamsChannelConfigurations = op(
  n0,
  _LMTCC,
  {
    [_h]: ["POST", "/list-ms-teams-channel-configurations", 200],
  },
  () => ListTeamsChannelConfigurationsRequest,
  () => ListTeamsChannelConfigurationsResult
);
export var UpdateChimeWebhookConfiguration = op(
  n0,
  _UCWC,
  {
    [_h]: ["POST", "/update-chime-webhook-configuration", 200],
  },
  () => UpdateChimeWebhookConfigurationRequest,
  () => UpdateChimeWebhookConfigurationResult
);
export var UpdateMicrosoftTeamsChannelConfiguration = op(
  n0,
  _UMTCC,
  {
    [_h]: ["POST", "/update-ms-teams-channel-configuration", 200],
  },
  () => UpdateTeamsChannelConfigurationRequest,
  () => UpdateTeamsChannelConfigurationResult
);
export var UpdateSlackChannelConfiguration = op(
  n0,
  _USCC,
  {
    [_h]: ["POST", "/update-slack-channel-configuration", 200],
  },
  () => UpdateSlackChannelConfigurationRequest,
  () => UpdateSlackChannelConfigurationResult
);
