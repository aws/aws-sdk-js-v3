import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { UpdateStackSetInput, UpdateStackSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateStackSetCommandInput = UpdateStackSetInput;
export declare type UpdateStackSetCommandOutput = UpdateStackSetOutput & __MetadataBearer;
export declare class UpdateStackSetCommand extends $Command<UpdateStackSetCommandInput, UpdateStackSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: UpdateStackSetCommandInput;
    constructor(input: UpdateStackSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStackSetCommandInput, UpdateStackSetCommandOutput>;
    private serialize;
    private deserialize;
}
