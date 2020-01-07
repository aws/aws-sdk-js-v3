import { MarketplaceCommerceAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceCommerceAnalyticsClient";
import { StartSupportDataExportRequest, StartSupportDataExportResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartSupportDataExportCommandInput = StartSupportDataExportRequest;
export declare type StartSupportDataExportCommandOutput = StartSupportDataExportResult & __MetadataBearer;
export declare class StartSupportDataExportCommand extends $Command<StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput, MarketplaceCommerceAnalyticsClientResolvedConfig> {
    readonly input: StartSupportDataExportCommandInput;
    constructor(input: StartSupportDataExportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceCommerceAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput>;
    private serialize;
    private deserialize;
}
