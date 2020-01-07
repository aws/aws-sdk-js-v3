import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportTransitGatewayRoutesRequest, ExportTransitGatewayRoutesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExportTransitGatewayRoutesCommandInput = ExportTransitGatewayRoutesRequest;
export declare type ExportTransitGatewayRoutesCommandOutput = ExportTransitGatewayRoutesResult & __MetadataBearer;
export declare class ExportTransitGatewayRoutesCommand extends $Command<ExportTransitGatewayRoutesCommandInput, ExportTransitGatewayRoutesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportTransitGatewayRoutesCommandInput;
    constructor(input: ExportTransitGatewayRoutesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportTransitGatewayRoutesCommandInput, ExportTransitGatewayRoutesCommandOutput>;
    private serialize;
    private deserialize;
}
