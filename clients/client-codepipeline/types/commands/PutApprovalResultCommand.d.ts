import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutApprovalResultInput, PutApprovalResultOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutApprovalResultCommandInput = PutApprovalResultInput;
export declare type PutApprovalResultCommandOutput = PutApprovalResultOutput & __MetadataBearer;
export declare class PutApprovalResultCommand extends $Command<PutApprovalResultCommandInput, PutApprovalResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutApprovalResultCommandInput;
    constructor(input: PutApprovalResultCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutApprovalResultCommandInput, PutApprovalResultCommandOutput>;
    private serialize;
    private deserialize;
}
