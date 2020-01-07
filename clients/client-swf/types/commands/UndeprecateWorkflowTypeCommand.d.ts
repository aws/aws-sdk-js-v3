import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { UndeprecateWorkflowTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UndeprecateWorkflowTypeCommandInput = UndeprecateWorkflowTypeInput;
export declare type UndeprecateWorkflowTypeCommandOutput = __MetadataBearer;
export declare class UndeprecateWorkflowTypeCommand extends $Command<UndeprecateWorkflowTypeCommandInput, UndeprecateWorkflowTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: UndeprecateWorkflowTypeCommandInput;
    constructor(input: UndeprecateWorkflowTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UndeprecateWorkflowTypeCommandInput, UndeprecateWorkflowTypeCommandOutput>;
    private serialize;
    private deserialize;
}
