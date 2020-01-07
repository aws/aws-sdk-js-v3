import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetEndpointAttributesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetEndpointAttributesCommandInput = SetEndpointAttributesInput;
export declare type SetEndpointAttributesCommandOutput = __MetadataBearer;
export declare class SetEndpointAttributesCommand extends $Command<SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput, SNSClientResolvedConfig> {
    readonly input: SetEndpointAttributesCommandInput;
    constructor(input: SetEndpointAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
