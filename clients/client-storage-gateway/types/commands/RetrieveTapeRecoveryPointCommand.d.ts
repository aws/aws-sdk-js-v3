import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { RetrieveTapeRecoveryPointInput, RetrieveTapeRecoveryPointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RetrieveTapeRecoveryPointCommandInput = RetrieveTapeRecoveryPointInput;
export declare type RetrieveTapeRecoveryPointCommandOutput = RetrieveTapeRecoveryPointOutput & __MetadataBearer;
export declare class RetrieveTapeRecoveryPointCommand extends $Command<RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: RetrieveTapeRecoveryPointCommandInput;
    constructor(input: RetrieveTapeRecoveryPointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RetrieveTapeRecoveryPointCommandInput, RetrieveTapeRecoveryPointCommandOutput>;
    private serialize;
    private deserialize;
}
