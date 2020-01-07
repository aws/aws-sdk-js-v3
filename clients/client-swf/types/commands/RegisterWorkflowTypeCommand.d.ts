import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RegisterWorkflowTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterWorkflowTypeCommandInput = RegisterWorkflowTypeInput;
export declare type RegisterWorkflowTypeCommandOutput = __MetadataBearer;
export declare class RegisterWorkflowTypeCommand extends $Command<RegisterWorkflowTypeCommandInput, RegisterWorkflowTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: RegisterWorkflowTypeCommandInput;
    constructor(input: RegisterWorkflowTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterWorkflowTypeCommandInput, RegisterWorkflowTypeCommandOutput>;
    private serialize;
    private deserialize;
}
