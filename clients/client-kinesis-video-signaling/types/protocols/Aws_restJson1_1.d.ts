import { GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput } from "../commands/GetIceServerConfigCommand";
import { SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput } from "../commands/SendAlexaOfferToMasterCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare function serializeAws_restJson1_1GetIceServerConfigCommand(input: GetIceServerConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function serializeAws_restJson1_1SendAlexaOfferToMasterCommand(input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function deserializeAws_restJson1_1GetIceServerConfigCommand(output: __HttpResponse, context: __SerdeContext): Promise<GetIceServerConfigCommandOutput>;
export declare function deserializeAws_restJson1_1SendAlexaOfferToMasterCommand(output: __HttpResponse, context: __SerdeContext): Promise<SendAlexaOfferToMasterCommandOutput>;
