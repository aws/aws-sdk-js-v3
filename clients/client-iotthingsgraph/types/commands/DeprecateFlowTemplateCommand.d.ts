import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeprecateFlowTemplateRequest, DeprecateFlowTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeprecateFlowTemplateCommandInput = DeprecateFlowTemplateRequest;
export declare type DeprecateFlowTemplateCommandOutput = DeprecateFlowTemplateResponse & __MetadataBearer;
export declare class DeprecateFlowTemplateCommand extends $Command<DeprecateFlowTemplateCommandInput, DeprecateFlowTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeprecateFlowTemplateCommandInput;
    constructor(input: DeprecateFlowTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateFlowTemplateCommandInput, DeprecateFlowTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
