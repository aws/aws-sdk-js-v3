import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { GetSubscriptionStateRequest, GetSubscriptionStateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSubscriptionStateCommandInput = GetSubscriptionStateRequest;
export declare type GetSubscriptionStateCommandOutput = GetSubscriptionStateResponse & __MetadataBearer;
export declare class GetSubscriptionStateCommand extends $Command<GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput, ShieldClientResolvedConfig> {
    readonly input: GetSubscriptionStateCommandInput;
    constructor(input: GetSubscriptionStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput>;
    private serialize;
    private deserialize;
}
