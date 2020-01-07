import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { RestoreTableToPointInTimeInput, RestoreTableToPointInTimeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreTableToPointInTimeCommandInput = RestoreTableToPointInTimeInput;
export declare type RestoreTableToPointInTimeCommandOutput = RestoreTableToPointInTimeOutput & __MetadataBearer;
export declare class RestoreTableToPointInTimeCommand extends $Command<RestoreTableToPointInTimeCommandInput, RestoreTableToPointInTimeCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: RestoreTableToPointInTimeCommandInput;
    constructor(input: RestoreTableToPointInTimeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreTableToPointInTimeCommandInput, RestoreTableToPointInTimeCommandOutput>;
    private serialize;
    private deserialize;
}
