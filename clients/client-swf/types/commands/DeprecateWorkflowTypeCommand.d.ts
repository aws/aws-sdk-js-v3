import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DeprecateWorkflowTypeInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeprecateWorkflowTypeCommandInput = DeprecateWorkflowTypeInput;
export declare type DeprecateWorkflowTypeCommandOutput = __MetadataBearer;
export declare class DeprecateWorkflowTypeCommand extends $Command<DeprecateWorkflowTypeCommandInput, DeprecateWorkflowTypeCommandOutput, SWFClientResolvedConfig> {
    readonly input: DeprecateWorkflowTypeCommandInput;
    constructor(input: DeprecateWorkflowTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateWorkflowTypeCommandInput, DeprecateWorkflowTypeCommandOutput>;
    private serialize;
    private deserialize;
}
