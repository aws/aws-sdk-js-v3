import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePartnerEventSourceCommandInput = CreatePartnerEventSourceRequest;
export declare type CreatePartnerEventSourceCommandOutput = CreatePartnerEventSourceResponse & __MetadataBearer;
export declare class CreatePartnerEventSourceCommand extends $Command<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: CreatePartnerEventSourceCommandInput;
    constructor(input: CreatePartnerEventSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
