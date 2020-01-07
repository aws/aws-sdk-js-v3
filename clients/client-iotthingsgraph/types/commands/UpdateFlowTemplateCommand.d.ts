import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UpdateFlowTemplateRequest, UpdateFlowTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateFlowTemplateCommandInput = UpdateFlowTemplateRequest;
export declare type UpdateFlowTemplateCommandOutput = UpdateFlowTemplateResponse & __MetadataBearer;
export declare class UpdateFlowTemplateCommand extends $Command<UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: UpdateFlowTemplateCommandInput;
    constructor(input: UpdateFlowTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
