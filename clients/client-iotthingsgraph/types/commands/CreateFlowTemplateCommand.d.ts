import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateFlowTemplateRequest, CreateFlowTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFlowTemplateCommandInput = CreateFlowTemplateRequest;
export declare type CreateFlowTemplateCommandOutput = CreateFlowTemplateResponse & __MetadataBearer;
export declare class CreateFlowTemplateCommand extends $Command<CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: CreateFlowTemplateCommandInput;
    constructor(input: CreateFlowTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
