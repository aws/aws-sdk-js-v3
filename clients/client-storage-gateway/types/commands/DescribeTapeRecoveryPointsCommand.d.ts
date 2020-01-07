import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTapeRecoveryPointsCommandInput = DescribeTapeRecoveryPointsInput;
export declare type DescribeTapeRecoveryPointsCommandOutput = DescribeTapeRecoveryPointsOutput & __MetadataBearer;
export declare class DescribeTapeRecoveryPointsCommand extends $Command<DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeTapeRecoveryPointsCommandInput;
    constructor(input: DescribeTapeRecoveryPointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput>;
    private serialize;
    private deserialize;
}
