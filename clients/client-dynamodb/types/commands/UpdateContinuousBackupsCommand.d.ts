import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateContinuousBackupsCommandInput = UpdateContinuousBackupsInput;
export declare type UpdateContinuousBackupsCommandOutput = UpdateContinuousBackupsOutput & __MetadataBearer;
export declare class UpdateContinuousBackupsCommand extends $Command<UpdateContinuousBackupsCommandInput, UpdateContinuousBackupsCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateContinuousBackupsCommandInput;
    constructor(input: UpdateContinuousBackupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContinuousBackupsCommandInput, UpdateContinuousBackupsCommandOutput>;
    private serialize;
    private deserialize;
}
