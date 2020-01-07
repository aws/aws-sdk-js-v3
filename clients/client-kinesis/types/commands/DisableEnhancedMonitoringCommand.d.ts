import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { DisableEnhancedMonitoringInput, EnhancedMonitoringOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableEnhancedMonitoringCommandInput = DisableEnhancedMonitoringInput;
export declare type DisableEnhancedMonitoringCommandOutput = EnhancedMonitoringOutput & __MetadataBearer;
export declare class DisableEnhancedMonitoringCommand extends $Command<DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput, KinesisClientResolvedConfig> {
    readonly input: DisableEnhancedMonitoringCommandInput;
    constructor(input: DisableEnhancedMonitoringCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput>;
    private serialize;
    private deserialize;
}
