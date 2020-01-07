import { SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput } from "../commands/SendSSHPublicKeyCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare function serializeAws_json1_1SendSSHPublicKeyCommand(input: SendSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest>;
export declare function deserializeAws_json1_1SendSSHPublicKeyCommand(output: __HttpResponse, context: __SerdeContext): Promise<SendSSHPublicKeyCommandOutput>;
