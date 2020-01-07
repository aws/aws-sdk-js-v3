import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTapeArchivesCommandInput = DescribeTapeArchivesInput;
export declare type DescribeTapeArchivesCommandOutput = DescribeTapeArchivesOutput & __MetadataBearer;
export declare class DescribeTapeArchivesCommand extends $Command<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeTapeArchivesCommandInput;
    constructor(input: DescribeTapeArchivesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput>;
    private serialize;
    private deserialize;
}
