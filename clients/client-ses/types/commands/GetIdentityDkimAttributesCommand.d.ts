import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetIdentityDkimAttributesRequest, GetIdentityDkimAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityDkimAttributesCommandInput = GetIdentityDkimAttributesRequest;
export declare type GetIdentityDkimAttributesCommandOutput = GetIdentityDkimAttributesResponse & __MetadataBearer;
export declare class GetIdentityDkimAttributesCommand extends $Command<GetIdentityDkimAttributesCommandInput, GetIdentityDkimAttributesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityDkimAttributesCommandInput;
    constructor(input: GetIdentityDkimAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityDkimAttributesCommandInput, GetIdentityDkimAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
