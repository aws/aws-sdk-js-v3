import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumeRecoveryPointsInput, ListVolumeRecoveryPointsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListVolumeRecoveryPointsCommandInput = ListVolumeRecoveryPointsInput;
export declare type ListVolumeRecoveryPointsCommandOutput = ListVolumeRecoveryPointsOutput & __MetadataBearer;
export declare class ListVolumeRecoveryPointsCommand extends $Command<ListVolumeRecoveryPointsCommandInput, ListVolumeRecoveryPointsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListVolumeRecoveryPointsCommandInput;
    constructor(input: ListVolumeRecoveryPointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVolumeRecoveryPointsCommandInput, ListVolumeRecoveryPointsCommandOutput>;
    private serialize;
    private deserialize;
}
