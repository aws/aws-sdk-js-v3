import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ScanInput, ScanOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ScanCommandInput = ScanInput;
export declare type ScanCommandOutput = ScanOutput & __MetadataBearer;
export declare class ScanCommand extends $Command<ScanCommandInput, ScanCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ScanCommandInput;
    constructor(input: ScanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ScanCommandInput, ScanCommandOutput>;
    private serialize;
    private deserialize;
}
