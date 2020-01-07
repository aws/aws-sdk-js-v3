import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetContextKeysForCustomPolicyRequest, GetContextKeysForPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetContextKeysForCustomPolicyCommandInput = GetContextKeysForCustomPolicyRequest;
export declare type GetContextKeysForCustomPolicyCommandOutput = GetContextKeysForPolicyResponse & __MetadataBearer;
export declare class GetContextKeysForCustomPolicyCommand extends $Command<GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetContextKeysForCustomPolicyCommandInput;
    constructor(input: GetContextKeysForCustomPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
