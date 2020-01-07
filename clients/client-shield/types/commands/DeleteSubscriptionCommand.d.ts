import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DeleteSubscriptionRequest, DeleteSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSubscriptionCommandInput = DeleteSubscriptionRequest;
export declare type DeleteSubscriptionCommandOutput = DeleteSubscriptionResponse & __MetadataBearer;
export declare class DeleteSubscriptionCommand extends $Command<DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DeleteSubscriptionCommandInput;
    constructor(input: DeleteSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
