import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { UpdateSubscriptionRequest, UpdateSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSubscriptionCommandInput = UpdateSubscriptionRequest;
export declare type UpdateSubscriptionCommandOutput = UpdateSubscriptionResponse & __MetadataBearer;
export declare class UpdateSubscriptionCommand extends $Command<UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: UpdateSubscriptionCommandInput;
    constructor(input: UpdateSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
