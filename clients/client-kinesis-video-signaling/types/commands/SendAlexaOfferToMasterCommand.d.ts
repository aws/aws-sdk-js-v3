import { KinesisVideoSignalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoSignalingClient";
import { SendAlexaOfferToMasterRequest, SendAlexaOfferToMasterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendAlexaOfferToMasterCommandInput = SendAlexaOfferToMasterRequest;
export declare type SendAlexaOfferToMasterCommandOutput = SendAlexaOfferToMasterResponse & __MetadataBearer;
export declare class SendAlexaOfferToMasterCommand extends $Command<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput, KinesisVideoSignalingClientResolvedConfig> {
    readonly input: SendAlexaOfferToMasterCommandInput;
    constructor(input: SendAlexaOfferToMasterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoSignalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput>;
    private serialize;
    private deserialize;
}
