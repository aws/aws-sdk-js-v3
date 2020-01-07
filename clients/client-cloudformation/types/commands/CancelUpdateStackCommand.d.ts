import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { CancelUpdateStackInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelUpdateStackCommandInput = CancelUpdateStackInput;
export declare type CancelUpdateStackCommandOutput = __MetadataBearer;
export declare class CancelUpdateStackCommand extends $Command<CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: CancelUpdateStackCommandInput;
    constructor(input: CancelUpdateStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput>;
    private serialize;
    private deserialize;
}
