import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetSoftwareUpdatesRequest, GetSoftwareUpdatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSoftwareUpdatesCommandInput = GetSoftwareUpdatesRequest;
export declare type GetSoftwareUpdatesCommandOutput = GetSoftwareUpdatesResult & __MetadataBearer;
export declare class GetSoftwareUpdatesCommand extends $Command<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput, SnowballClientResolvedConfig> {
    readonly input: GetSoftwareUpdatesCommandInput;
    constructor(input: GetSoftwareUpdatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput>;
    private serialize;
    private deserialize;
}
