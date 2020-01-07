import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateBandwidthRateLimitCommandInput = UpdateBandwidthRateLimitInput;
export declare type UpdateBandwidthRateLimitCommandOutput = UpdateBandwidthRateLimitOutput & __MetadataBearer;
export declare class UpdateBandwidthRateLimitCommand extends $Command<UpdateBandwidthRateLimitCommandInput, UpdateBandwidthRateLimitCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateBandwidthRateLimitCommandInput;
    constructor(input: UpdateBandwidthRateLimitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBandwidthRateLimitCommandInput, UpdateBandwidthRateLimitCommandOutput>;
    private serialize;
    private deserialize;
}
