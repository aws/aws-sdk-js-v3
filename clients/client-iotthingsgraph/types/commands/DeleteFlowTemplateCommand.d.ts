import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteFlowTemplateRequest, DeleteFlowTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFlowTemplateCommandInput = DeleteFlowTemplateRequest;
export declare type DeleteFlowTemplateCommandOutput = DeleteFlowTemplateResponse & __MetadataBearer;
export declare class DeleteFlowTemplateCommand extends $Command<DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeleteFlowTemplateCommandInput;
    constructor(input: DeleteFlowTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
