import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { StartReportCreationInput, StartReportCreationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartReportCreationCommandInput = StartReportCreationInput;
export declare type StartReportCreationCommandOutput = StartReportCreationOutput & __MetadataBearer;
export declare class StartReportCreationCommand extends $Command<StartReportCreationCommandInput, StartReportCreationCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: StartReportCreationCommandInput;
    constructor(input: StartReportCreationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartReportCreationCommandInput, StartReportCreationCommandOutput>;
    private serialize;
    private deserialize;
}
