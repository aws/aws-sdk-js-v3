import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { GetMinuteUsageRequest, GetMinuteUsageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMinuteUsageCommandInput = GetMinuteUsageRequest;
export declare type GetMinuteUsageCommandOutput = GetMinuteUsageResponse & __MetadataBearer;
export declare class GetMinuteUsageCommand extends $Command<GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: GetMinuteUsageCommandInput;
    constructor(input: GetMinuteUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput>;
    private serialize;
    private deserialize;
}
