import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type IsVpcPeeredCommandInput = IsVpcPeeredRequest;
export declare type IsVpcPeeredCommandOutput = IsVpcPeeredResult & __MetadataBearer;
export declare class IsVpcPeeredCommand extends $Command<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput, LightsailClientResolvedConfig> {
    readonly input: IsVpcPeeredCommandInput;
    constructor(input: IsVpcPeeredCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput>;
    private serialize;
    private deserialize;
}
