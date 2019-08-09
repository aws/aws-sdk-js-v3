import {
  _NewDeviceMetadataType,
  _UnmarshalledNewDeviceMetadataType
} from "./_NewDeviceMetadataType";

/**
 * <p>The authentication result.</p>
 */
export interface _AuthenticationResultType {
  /**
   * <p>The access token.</p>
   */
  AccessToken?: string;

  /**
   * <p>The expiration period of the authentication result in seconds.</p>
   */
  ExpiresIn?: number;

  /**
   * <p>The token type.</p>
   */
  TokenType?: string;

  /**
   * <p>The refresh token.</p>
   */
  RefreshToken?: string;

  /**
   * <p>The ID token.</p>
   */
  IdToken?: string;

  /**
   * <p>The new device metadata from an authentication result.</p>
   */
  NewDeviceMetadata?: _NewDeviceMetadataType;
}

export interface _UnmarshalledAuthenticationResultType
  extends _AuthenticationResultType {
  /**
   * <p>The new device metadata from an authentication result.</p>
   */
  NewDeviceMetadata?: _UnmarshalledNewDeviceMetadataType;
}
