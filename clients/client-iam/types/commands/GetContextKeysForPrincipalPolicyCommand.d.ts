import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetContextKeysForPolicyResponse, GetContextKeysForPrincipalPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetContextKeysForPrincipalPolicyCommandInput = GetContextKeysForPrincipalPolicyRequest;
export declare type GetContextKeysForPrincipalPolicyCommandOutput = GetContextKeysForPolicyResponse & __MetadataBearer;
export declare class GetContextKeysForPrincipalPolicyCommand extends $Command<GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetContextKeysForPrincipalPolicyCommandInput;
    constructor(input: GetContextKeysForPrincipalPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
