import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePolicyVersionCommandInput = CreatePolicyVersionRequest;
export declare type CreatePolicyVersionCommandOutput = CreatePolicyVersionResponse & __MetadataBearer;
export declare class CreatePolicyVersionCommand extends $Command<CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreatePolicyVersionCommandInput;
    constructor(input: CreatePolicyVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput>;
    private serialize;
    private deserialize;
}
