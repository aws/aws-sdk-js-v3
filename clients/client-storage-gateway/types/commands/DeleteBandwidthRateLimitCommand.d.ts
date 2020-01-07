import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBandwidthRateLimitCommandInput = DeleteBandwidthRateLimitInput;
export declare type DeleteBandwidthRateLimitCommandOutput = DeleteBandwidthRateLimitOutput & __MetadataBearer;
export declare class DeleteBandwidthRateLimitCommand extends $Command<DeleteBandwidthRateLimitCommandInput, DeleteBandwidthRateLimitCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteBandwidthRateLimitCommandInput;
    constructor(input: DeleteBandwidthRateLimitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBandwidthRateLimitCommandInput, DeleteBandwidthRateLimitCommandOutput>;
    private serialize;
    private deserialize;
}
