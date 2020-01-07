import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetPolicyVersionRequest, GetPolicyVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPolicyVersionCommandInput = GetPolicyVersionRequest;
export declare type GetPolicyVersionCommandOutput = GetPolicyVersionResponse & __MetadataBearer;
export declare class GetPolicyVersionCommand extends $Command<GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetPolicyVersionCommandInput;
    constructor(input: GetPolicyVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
