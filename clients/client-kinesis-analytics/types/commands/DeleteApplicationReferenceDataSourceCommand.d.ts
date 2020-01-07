import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { DeleteApplicationReferenceDataSourceRequest, DeleteApplicationReferenceDataSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationReferenceDataSourceCommandInput = DeleteApplicationReferenceDataSourceRequest;
export declare type DeleteApplicationReferenceDataSourceCommandOutput = DeleteApplicationReferenceDataSourceResponse & __MetadataBearer;
export declare class DeleteApplicationReferenceDataSourceCommand extends $Command<DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: DeleteApplicationReferenceDataSourceCommandInput;
    constructor(input: DeleteApplicationReferenceDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
