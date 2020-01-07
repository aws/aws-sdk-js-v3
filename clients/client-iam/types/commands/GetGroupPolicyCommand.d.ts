import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetGroupPolicyRequest, GetGroupPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGroupPolicyCommandInput = GetGroupPolicyRequest;
export declare type GetGroupPolicyCommandOutput = GetGroupPolicyResponse & __MetadataBearer;
export declare class GetGroupPolicyCommand extends $Command<GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetGroupPolicyCommandInput;
    constructor(input: GetGroupPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
