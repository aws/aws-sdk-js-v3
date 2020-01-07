import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateTimeToLiveInput, UpdateTimeToLiveOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTimeToLiveCommandInput = UpdateTimeToLiveInput;
export declare type UpdateTimeToLiveCommandOutput = UpdateTimeToLiveOutput & __MetadataBearer;
export declare class UpdateTimeToLiveCommand extends $Command<UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateTimeToLiveCommandInput;
    constructor(input: UpdateTimeToLiveCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput>;
    private serialize;
    private deserialize;
}
