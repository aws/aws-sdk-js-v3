import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ContinueUpdateRollbackInput, ContinueUpdateRollbackOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ContinueUpdateRollbackCommandInput = ContinueUpdateRollbackInput;
export declare type ContinueUpdateRollbackCommandOutput = ContinueUpdateRollbackOutput & __MetadataBearer;
export declare class ContinueUpdateRollbackCommand extends $Command<ContinueUpdateRollbackCommandInput, ContinueUpdateRollbackCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ContinueUpdateRollbackCommandInput;
    constructor(input: ContinueUpdateRollbackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ContinueUpdateRollbackCommandInput, ContinueUpdateRollbackCommandOutput>;
    private serialize;
    private deserialize;
}
